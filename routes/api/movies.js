const router = require("express").Router();
const movieController = require("../../controllers/movieController");

// "/api/movies"
router.route("/")
  .get(movieController.findAll)
  .post(movieController.create);

// "/api/movies/:id"
router
  .route("/:id")
  .get(movieController.findById)
  .put(movieController.update)
  .delete(movieController.remove);

module.exports = router;