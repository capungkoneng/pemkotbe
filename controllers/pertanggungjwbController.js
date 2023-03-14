const model = require("../models");
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const Pagination = require("../config/pagging");
const url = require("url");
const t = require("../config/transaksi");

const getAllPsppd = async (req, res) => {
  try {
    const search = req.query.search || "";
    const hostname = req.headers.host;
    const pathname = url.parse(req.url).pathname;
    const pagination = new Pagination(
      req.query.page,
      req.query.perPage,
      hostname,
      pathname
    );
    const totalRows = await model.psppd.count();
    const results = await model.psppd.findAll({
      where: {
        [Op.or]: [
          {
            nama: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
      },
      include: [
        {
          model: model.vdsppd,
          as: "vdsppd",
        },
        {
          model: model.vdbsppd,
          as: "vdbsppd",
        },
      ],
      offset: pagination.page * pagination.perPage,
      limit: pagination.perPage,
      order: [["createdAt", "DESC"]],
    });
    if (results.length > 0) {
      return res.status(200).json({
        success: true,
        massage: "Get All Biaya Penginapan",
        result: results,
        page: pagination.page,
        limit: pagination.perPage,
        totalData: totalRows,
        currentPage: pagination.currentPage,
        nextPage: pagination.next(),
        previouspage: pagination.prev(),
      });
    } else {
      return res.status(400).json({
        success: false,
        massage: "No data",
      });
    }
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};

const addPsppd = async (req, res) => {
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.psppd.create(
      {
        id: uuidv4(),
        no_spd: req.body.no_spd,
        nik: req.body.nik,
        nama: req.body.nama,
        no_spt: req.body.no_spt,
        tgl_berangkat: req.body.tgl_berangkat,
        tgl_mulai: req.body.tgl_mulai,
        tgl_pulang: req.body.tgl_pulang,
        tujuan: req.body.tujuan,
        vdsppd: req.body.vdsppd,
        vdbsppd: req.body.vdbsppd,
      },
      {
        include: ["vdsppd", "vdbsppd"],
      },
      { transaction: transaction.data }
    );
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
      res.status(406).json({
        success: false,
        massage: "Gagal nambah data",
      });
    }
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};

const updatePsppd = async (req, res) => {
  let id = req.params.id;
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.psppd.update(
      req.body,
      {
        where: {
          id: id,
        },
        returning: true,
      },
      { transaction: transaction.data }
    );
    // commit transaction
    const commit = await t.commit(transaction.data);
    if (!commit.status && commit.error) {
      throw commit.error;
    }

    if (result) {
      res.status(201).json({
        success: true,
        massage: "Berhasil update data",
        result: result,
      });
    } else {
      // rollback transaction
      await t.rollback(transaction.data);
      res.status(404).json({
        success: false,
        massage: "Gagal update data",
      });
    }
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};

const deletePsppd = async (req, res) => {
  let id = req.params.id;
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.psppd.destroy(
      {
        where: {
          id: id,
        },
      },
      { transaction: transaction.data }
    );
    // commit transaction
    const commit = await t.commit(transaction.data);
    if (!commit.status && commit.error) {
      throw commit.error;
    }

    if (result) {
      res.status(201).json({
        success: true,
        massage: "Berhasil Hapus data",
        result: result,
      });
    } else {
      // rollback transaction
      await t.rollback(transaction.data);
      res.status(404).json({
        success: false,
        massage: "Gagal Hapus data",
      });
    }
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};

const getOnePsppd = async (req, res) => {
  try {
    const result = await model.psppd.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (result) {
      return res.status(200).json({ succes: true, msg: result });
    } else {
      return res.status(404).json({ success: false, msg: "no data" });
    }
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};
module.exports = {
  getAllPsppd,
  addPsppd,
  updatePsppd,
  deletePsppd,
  getOnePsppd,
};
