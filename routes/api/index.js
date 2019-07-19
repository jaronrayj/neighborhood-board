const router = require("express").Router();
const eventRoutes = require("./events");
const marketRoutes = require("./markets");
const discussionRoutes = require("./discussions");
const authRoutes = require("./auth");
const userRoutes = require("./users");
const imageRoutes = require("./image");

// Event routes - /api/events
router.use("/events", eventRoutes);
router.use("/markets", marketRoutes);
router.use("/discussions", discussionRoutes);
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/image", imageRoutes);


module.exports = router;