const router = require("express").Router();
const eventRoutes = require("./events");

// Event routes - /api/events
router.use("/events", eventRoutes);
router.use("/markets", eventRoutes);
router.use("/discussions", eventRoutes);

module.exports = router;