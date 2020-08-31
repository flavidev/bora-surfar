const Instructor = require("../models/Instructor");
const axios = require("axios");

module.exports = {
  async store(req, res) {
    const {
      username,
      profile_picture,
      whatsapp,
      bio,
      beaches,
      price,
      days,
    } = req.body;

    // verify if user already exists by its whatsapp

    let instructor = await Instructor.findOne({ whatsapp });

    if (!instructor) {
      await Instructor.create({
        username,
        profile_picture,
        whatsapp,
        bio,
        beaches,
        price,
        days,   
      });
    }

    return res.json(req.body);
  },


  async index(req, res){
    const instructors = await Instructor.find()
    return res.json(instructors)
  }

};
