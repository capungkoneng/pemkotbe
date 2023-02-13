const model = require("../models");
const { Op } = require("sequelize");

const getAllGol = async (req, res) => {
  try {
    const result = await model.golongan.findAll({
      attributes: ["id", "nama"],
    });
    if (result.length) {
      return res.status(200).json({ succes: true, msg: result });
    } else {
      return res.status(404).json({ success: false, msg: "no data" });
    }
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};

module.exports = {
  getAllGol,
};
