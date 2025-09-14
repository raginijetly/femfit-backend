const { Router } = require("express");
const {
  signUpController,
  loginController,
  forgotController,
  googleOauth,
  logoutController,
  forgetPasswordController,
  validateToken,
  updatePassword
} = require("../controllers/authController");
const { authenticateToken } = require("../middleware/authMiddleware");

const authRouter = Router();

authRouter.get("/", (req, res) => {
  res.json({ status: 200, message: "Hello Auth Router!" });
});

authRouter.post("/signup", signUpController);
authRouter.post("/login", loginController);
authRouter.get("/logout", authenticateToken, logoutController);
authRouter.post("/forgot", forgotController);
authRouter.post("/sign-in-with-google", googleOauth);

authRouter.get("/test", authenticateToken, (req, res) => {
  res.json({ status: 200, message: "Hello Authentication Router!" });
});

authRouter.post("/forget-password", forgetPasswordController);
authRouter.post("/reset-password", updatePassword);
authRouter.get("/reset-password", validateToken);

module.exports = authRouter;
