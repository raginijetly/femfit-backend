const jwt = require("jsonwebtoken");
const User = require("../models/Users");

const authenticateToken = (req, res, next) => {
  // Check for token in Authorization header or cookies
  let token;
  const authHeader = req.headers["authorization"];
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) return res.json({ status: 401, message: "Unauthorized" });

  jwt.verify(token, process.env.SESSION_SECRET, async (err, user) => {
    if (err) return res.json({ status: 403, message: "Invalid token" });
    const dbUser = await User.findById(user.id);
    if(!dbUser) return res.json({ status: 404, message: "User not found" });
    req.user = user;
    next();
  });
};

const checkUser = (req, res, next) => {
  // Check for token in Authorization header or cookies
  let token;
  const authHeader = req.headers["authorization"];
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }
  if (!token) return next();

  jwt.verify(token, process.env.SESSION_SECRET, async (err, user) => {
    if (err) return next();
    const userData = await User.findById(user.id);
    if (!userData) return next();
    req.user = {
      id: userData._id,
      isAdmin: userData.isAdmin,
      isMember: userData.isMember,
    };
    next();
  });
};

module.exports = { authenticateToken, checkUser };
