const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const crypto = require("crypto");
const PasswordResetToken = require("../models/PasswordResetTokens"); 
const { sendPasswordResetMail } = require("../utils");

const User = require("../models/Users");

const signUpController = [
  [
    body("fullName")
      .trim()
      .isLength({ min: 1, max: 100 })
      .withMessage("Full name must be between 1 and 100 characters"),
    body("email")
      .trim()
      .isEmail()
      .withMessage("Please enter a valid email address"),
    body("password")
      .trim()
      .isLength({ min: 6, max: 50 })
      .withMessage("Password must be between 6 and 50 characters"),
    body("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password)
        throw new Error("Passwords do not match");
      return true;
    }),
  ],
  asyncHandler(async (req, res) => {
    const _name = "signUpController";
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const formattedErrors = errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      }));
      console.log(_name, " validation errors:", formattedErrors);
      return res.json({ status: 400, errors: formattedErrors });
    }

    const { fullName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    if (await User.findOne({ email })) {
      console.log(_name, " email already exists:", email);

      return res.json({
        status: 400,
        errors: [
          {
            field: "email",
            message: "Email already exists",
          },
        ],
      });
    }
    let nickname =
      fullName && fullName.trim() ? fullName.trim() : email.split("@")[0];

    const user = new User({
      fullName,
      nickname,
      email,
      password: hashedPassword,
    });
    await user.save();
    jwt.sign(
      { id: user._id },
      process.env.SESSION_SECRET,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) {
          console.error(_name, " error signing up:", err);
          return res.json({
            status: 500,
            message: `Signed up successfully, error logging in: ${err}`,
          });
        }
        res.cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        });
        res.json({
          status: 200,
          message: "User Signed up successfully",
          token,
          completedOnboarding: user.completedOnboarding,
        });
        console.log(_name, " user signed up successfully:", user._id);
      }
    );
  }),
];

const loginController = [
  [
    body("email")
      .trim()
      .isEmail()
      .withMessage("Please enter a valid email address"),
    body("password")
      .trim()
      .isLength({ min: 6, max: 50 })
      .withMessage("Password must be between 6 and 50 characters"),
  ],
  asyncHandler(async (req, res) => {
    const _name = "loginController";
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const formattedErrors = errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      }));
      console.log(_name, " validation errors:", formattedErrors);
      return res.json({ status: 400, errors: formattedErrors });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      console.log(_name, " user not found:", email);
      return res.json({
        status: 400,
        errors: [
          {
            field: "email",
            message: "User does not exist",
          },
        ],
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log(_name, " incorrect password for user:", email);
      return res.json({
        status: 400,
        errors: [
          {
            field: "password",
            message: "Incorrect password",
          },
        ],
      });
    }

    jwt.sign(
      { id: user._id },
      process.env.SESSION_SECRET,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) {
          console.error(_name, " error signing in:", err);
          return res.json({ status: 500, message: `Error logging in: ${err}` });
        }
        res.cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        });
        res.json({
          status: 200,
          message: "User logged in successfully",
          token,
        });
        console.log(
          _name,
          " user logged in successfully:",
          "Full Name :" + user.fullName,
          "Email :" + user.email
        );
      }
    );
  }),
];

const forgotController = [
  [
    body("fullName")
      .trim()
      .isLength({ min: 1, max: 100 })
      .withMessage("Full name must be between 1 and 100 characters"),
    body("email")
      .trim()
      .isEmail()
      .withMessage("Please enter a valid email address"),
    body("password")
      .trim()
      .isLength({ min: 6, max: 50 })
      .withMessage("Password must be between 6 and 50 characters"),
    body("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password)
        throw new Error("Passwords do not match");
      return true;
    }),
  ],
  asyncHandler(async (req, res) => {
    const _name = "forgotController";
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const formattedErrors = errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      }));
      console.log(_name, " validation errors:", formattedErrors);
      return res.json({ status: 400, errors: formattedErrors });
    }

    const { fullName, email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      console.log(_name, " user not found:", email);
      return res.json({ status: 400, message: "User does not exist" });
    }
    if (user.fullName !== fullName) {
      console.log(_name, " full name does not match for user:", email);
      return res.json({ status: 400, message: "Full name does not match" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();
    console.log(_name, " password updated for user:", email);
    return res.json({
      status: 200,
      message: "Password updated successfully",
    });
  }),
];

const logoutController = asyncHandler(async (req, res) => {
  try {
    res.clearCookie("token", { httpOnly: true });
    res.json({ status: 200, message: "User logged out successfully" });
  } catch (err) {
    console.error("Logout error:", err);
    res.json({ status: 500, message: "Error logging out" });
  }
});

const googleOauth = async (req, res) => {
  try {
    const { idToken } = req.body;
    if (!idToken) {
      console.log("Google auth error: ID token is required");
      return res.json({ status: 400, message: "ID token is required" });
    }

    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    if (!payload || !payload.sub) {
      console.log("Google auth error: Invalid ID token");
      return res.json({ status: 400, message: "Invalid ID token" });
    }

    const { name, email, sub } = payload;

    let user = await User.findOne({ email });

    if (!user) {
      const password = bcrypt.hashSync(sub, 10);
      let nickname = name && name.trim() ? name.trim() : email.split("@")[0];
      user = await User.create({ fullName: name, email, password, nickname });
    }

    jwt.sign(
      { id: user._id },
      process.env.SESSION_SECRET,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) {
          console.error("Google auth error:", err);
          return res.json({ status: 500, message: `Error logging in: ${err}` });
        }
        res.cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        });
        res.json({
          status: 200,
          message: "User logged in successfully",
          data: { token },
        });
        console.log("User logged in successfully via Google:", user._id);
      }
    );
  } catch (err) {
    console.error("Google auth error:", err);
    res.status(401).json({ status: 401, message: "Invalid ID token" });
  }
};

const forgetPasswordController = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ status: 400, message: "Email is required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ status: 404, message: "User not found" });

    const token = crypto.randomBytes(32).toString("hex");
    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");

    await PasswordResetToken.create({ userId: user._id, token: tokenHash });
    const clientUrl =
      (req.headers["x-client-url"] && String(req.headers["x-client-url"]).trim()) ||
      (req.headers.referer && String(req.headers.referer).trim()) ||
      process.env.CLIENT_URL ||
      null;

    const resetLink = clientUrl ? `${clientUrl.replace(/\/+$/, "")}/reset-password?token=${token}` : null;
    await sendPasswordResetMail({ userEmail: email, userName: user.fullName, resetUrl: resetLink, expiryMinutes: 10 });
    
    return res.json({
      status: 200,
      message: "Password reset link sent",
    });
  } catch (err) {
    err.scope = err.scope || "forgetPasswordController";
    console.error("Forget password error:", err);
    res.status(500).json({ status: 500, message: "Error processing request" });
  }
};

const validateToken = async (req, res) => {
  try {
    const { token } = req.query;
    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
    const passwordResetToken = await PasswordResetToken.findOne({ token: tokenHash });
    if (!passwordResetToken) return res.status(400).json({ status: 400, message: "Invalid or expired token" });
    res.status(200).json({ status: 200, message: "Token is valid" });
  } catch (err) {
    err.scope = "validateToken";
    console.error("Validate token error:", err);
    res.status(500).json({ status: 500, message: "Error processing request" });
  }
};

const updatePassword = async (req, res) => {
  try {
    const { token, password, confirmPassword } = req.body;
    if (!token || !password || !confirmPassword) return res.status(400).json({ status: 400, message: "Token, Password and Confirm Password are required" });
    if (password != confirmPassword) return res.status(400).json({ status: 400, message: "Password and Confirm Password do not match" });
    if (password.length < 6 || password.length > 50) return res.status(400).json({ status: 400, message: "Password must be between 6 and 50 characters" });

    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
    const passwordResetToken = await PasswordResetToken.findOne({ token: tokenHash });
    if (!passwordResetToken) return res.status(400).json({ status: 400, message: "Invalid or expired token" });

    const user = await User.findById(passwordResetToken.userId);
    if (!user) return res.status(404).json({ status: 404, message: "User not found" });

    user.password = bcrypt.hashSync(password, 10);
    await user.save();
    await PasswordResetToken.deleteOne({ _id: passwordResetToken._id });

    res.status(200).json({ status: 200, message: "Password updated successfully" });
  } catch (err) {
    err.scope = "updatePassword";
    console.error("Update password error:", err);
    res.status(500).json({ status: 500, message: "Error processing request" });
  }
};

module.exports = {
  signUpController,
  loginController,
  logoutController,
  forgotController,
  googleOauth,
  forgetPasswordController,
  validateToken,
  updatePassword
};
