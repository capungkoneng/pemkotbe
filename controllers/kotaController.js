const model = require("../models");
const { Op } = require("sequelize");

const getAllKota = async (req, res) => {
  const search = req.query.search || "";

  try {
    const result = await model.ec_cities.findAll({
      attributes: ["city_id", ["city_name", "name"]],
      include: [
        {
          model: model.ec_provinces,
          attributes: ["prov_id", ["prov_name", "name"]],
          as: "city",
          where: {
            [Op.or]: [
              {
                prov_name: {
                  [Op.like]: "%" + search + "%",
                },
              },
            ],
          },
        },
      ],
    });
    if (result.length > 0) {
      return res.status(200).json({ succes: true, msg: result });
    } else {
      return res.status(404).json({ success: false, msg: "no data" });
    }
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};

module.exports = {
  getAllKota,
};
