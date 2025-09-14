const { v4: uuidv4 } = require("uuid");

// Configuration via environment variables
const LOG_RESPONSES = process.env.LOG_RESPONSES !== "false"; // default true
const LOG_SAMPLING_RATE = parseFloat(process.env.LOG_SAMPLING_RATE) || 1; // 1 = log all
const LOG_REDACT_KEYS = (
  process.env.LOG_REDACT_KEYS ||
  "password,token,accessToken,refreshToken,authorization,ssn,creditCard,pregnancy,menstruation,cycle,health,symptoms"
)
  .split(",")
  .map((k) => k.trim().toLowerCase())
  .filter(Boolean);
const LOG_MAX_BODY_SIZE = parseInt(process.env.LOG_MAX_BODY_SIZE, 10) || 100000; // chars

function shouldLog() {
  if (!LOG_RESPONSES) return false;
  if (LOG_SAMPLING_RATE >= 1) return true;
  return Math.random() < LOG_SAMPLING_RATE;
}

// Safe serializer: depth-limited, handles circular refs and non-plain objects.
const MAX_SERIALIZE_DEPTH = 5;

function isPlainObject(val) {
  return Object.prototype.toString.call(val) === "[object Object]";
}

function truncateString(s) {
  if (typeof s !== "string") return s;
  if (s.length > LOG_MAX_BODY_SIZE)
    return s.slice(0, LOG_MAX_BODY_SIZE) + "...[truncated]";
  return s;
}

function redactString(s) {
  if (typeof s !== "string") return s;
  let out = s;
  for (const key of LOG_REDACT_KEYS) {
    if (!key) continue;
    // replace case-insensitive occurrences
    try {
      out = out.replace(new RegExp(key, "gi"), "[REDACTED]");
    } catch (e) {
      // if key contains invalid regex chars, fall back to simple split/join
      out = out.split(key).join("[REDACTED]");
    }
  }
  return out;
}

function safeSerialize(
  value,
  depth = MAX_SERIALIZE_DEPTH,
  seen = new WeakSet()
) {
  if (value == null) return value;
  const t = typeof value;
  if (t === "string") return redactString(truncateString(value));
  if (t === "number" || t === "boolean") return value;
  if (value instanceof Date) return value.toISOString();
  if (t === "function") return "[Function]";

  if (t === "object") {
    if (seen.has(value)) return "[Circular]";
    if (depth <= 0) return "[MaxDepth]";
    seen.add(value);

    if (Array.isArray(value)) {
      return value.map((v) => safeSerialize(v, depth - 1, seen));
    }

    if (isPlainObject(value)) {
      const out = {};
      for (const key of Object.keys(value)) {
        const lower = key.toLowerCase();
        if (LOG_REDACT_KEYS.some((rk) => lower.includes(rk))) {
          out[key] = "[REDACTED]";
          continue;
        }
        try {
          out[key] = safeSerialize(value[key], depth - 1, seen);
        } catch (e) {
          out[key] = "[Unserializable]";
        }
      }
      return out;
    }

    // Non-plain object (Mongoose document, stream, etc.) - avoid deep traversal
    try {
      const repr = String(value);
      return truncateString(
        repr.length > 0
          ? repr
          : `[Object:${
              value.constructor && value.constructor.name
                ? value.constructor.name
                : "Unknown"
            }]`
      );
    } catch (e) {
      return `[Object:${
        value.constructor && value.constructor.name
          ? value.constructor.name
          : "Unknown"
      }]`;
    }
  }

  // fallback
  try {
    return String(value);
  } catch (e) {
    return "[Unserializable]";
  }
}

module.exports = function responseLoggerMiddleware(req, res, next) {
  // assign request id
  req.id = req.id || uuidv4();
  const start = process.hrtime();

  const originalJson = res.json.bind(res);

  res.json = function (body) {
    // send response first
    const ret = originalJson(body);

    try {
      if (!shouldLog()) return ret;

      const diff = process.hrtime(start);
      const durationMs = Math.round(diff[0] * 1e3 + diff[1] / 1e6);

      // Serialize the response safely (handles strings, large texts, circular refs)
      const safe = safeSerialize(body);
      let responseToLog;
      try {
        responseToLog = JSON.stringify(safe);
      } catch (err) {
        responseToLog = "[unserializable response]";
      }

      const meta = {
        reqId: req.id,
        method: req.method,
        path: req.originalUrl || req.url,
        status: res.statusCode,
        durationMs,
        user: req.user ? { id: req.user.id || req.user._id } : undefined,
        response: responseToLog,
        timestamp: new Date().toISOString(),
      };

      // Single-line structured log for easy ingestion
      console.log(JSON.stringify(meta));
    } catch (err) {
      console.log(
        JSON.stringify({
          reqId: req.id,
          warn: "response logger failed",
          error: err && err.message,
        })
      );
    }

    return ret;
  };

  next();
};
