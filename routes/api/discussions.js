const router = require("express").Router();
const discussionsController = require("../../controllers/discussionController");

//Match with "/api/discussions"
router.route("/")
    .get(discussionController.findAll)
    .post(discussionController.create);

//Match with "/api/discussions/:id"
router
    .route("/:id")
    .get(discussionsController.findById)
    .put(discussionsController.update)
    .delete(discussionsController.remove);
    
module.exports = router;