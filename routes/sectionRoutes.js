const { Router } = require("express");
const sectionRouter = Router();
const { authenticateToken } = require("../middleware/authMiddleware");
const { homeController } = require("../controllers/sectionsController");

sectionRouter.get("/home", authenticateToken, homeController);

module.exports = sectionRouter;
