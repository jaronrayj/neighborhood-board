const router = require("express").Router();
const marketsController = require("../../controllers/marketplaceController");

//Match with "/api/markets"
router.route("/")
    .get(marketsController.findAll)
    .post(marketsController.create);

//Match with "/api/markets/:id"
router
    .route("/:id")
    .get(marketsController.findById)
    .put(marketsController.update)
    .delete(marketsController.remove);
    
module.exports = router;