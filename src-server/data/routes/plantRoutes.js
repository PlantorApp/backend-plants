import {
  addNewPlant,
  getPlants,
  getPlantByID,
  updatePlant,
  deletePlant,
} from "../controllers/plantController.js";

const routes = (app) => {
  app
    .route("/plants")
    .get((req, res, next) => {
      // Middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getPlants)
    // This is a post endpoint
    .post(addNewPlant);

  // try {
  app
    .route("/plants/:sub")
    // Get a specific plant
    .get(getPlantByID)
    // Update a specific plant
    .put(updatePlant)
    // Delete a specific plant
    .delete(deletePlant);

  app.route("/*").get((req, res) => {
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);
    res.send(`You try to ${req.method} from ${req.originalUrl}.`);
  });
};

export default routes;
