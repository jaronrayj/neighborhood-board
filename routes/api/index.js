const router = require("express").Router();
const eventRoutes = require("./events");
const marketRoutes = require("./markets");
const discussionRoutes = require("./discussions");

// Event routes - /api/events
router.use("/events", eventRoutes);
router.use("/markets", marketRoutes);
router.use("/discussions", discussionRoutes);

module.exports = router;