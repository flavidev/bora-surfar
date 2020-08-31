const { index } = require("./InstructorController");
const Instructor = require("../models/Instructor");

module.exports = {
  async index(req, res) {
    console.log(req.query);
    return res.json({instructors:[]})
  },
};
