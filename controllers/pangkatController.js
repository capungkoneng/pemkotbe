const model = require("../models");
const { Op } = require("sequelize");

const getAllPang = async (req, res) => {
  try {
    const result = await model.pangkat.findAll({
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

const addPang = async (req, res) => {
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.pangkat.create(req.body, {
      transaction: transaction.data,
    });
    // commit transaction
    const commit = await t.commit(transaction.data);
    if (!commit.status && commit.error) {
      throw commit.error;
    }
    if (result) {
      res.status(201).json({
        success: true,
        massage: "Berhasil Nambah Data",
        result: result,
      });
    } else {
      // rollback transaction
      await t.rollback(transaction.data);
      res.status(404).json({
        success: false,
        massage: "Gagal nambah data",
      });
    }
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};


module.exports = {
  getAllPang,
  addPang
};
