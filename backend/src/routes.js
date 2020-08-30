const {Router} = require("express");

const routes = Router();

routes.post("/instructors", (req, res) => {
    const {username} = req.body;
    console.log(username);
    return res.json(req.body);
  });

  

  module.exports = routes;