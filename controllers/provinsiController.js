const model = require("../models");
const { Op } = require("sequelize");

const getAllProv = async (req, res) => {
  try {
    const result = await model.ec_provinces.findAll({
      attributes: ["prov_id", ["prov_name", "name"]],
    });
    if (result) {
      return res.status(200).json({ succes: true, msg: result });
    } else {
      return res.status(400).json({ success: false, msg: "no data" });
    }
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};

module.exports = {
  getAllProv,
};
