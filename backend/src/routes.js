const { Router } = require("express");
const InstructorController = require("./controllers/InstructorController");

const FilteredSearchController = require("./controllers/FilteredSearchController");

const routes = Router();

routes.post("/instructors", InstructorController.store);
routes.get("/instructors", InstructorController.index);
routes.get("/search", FilteredSearchController.index);

module.exports = routes;
