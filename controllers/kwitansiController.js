const model = require("../models");
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const Pagination = require("../config/pagging");
const url = require("url");
const t = require("../config/transaksi");

const getAllKwitansi = async (req, res) => {
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
    const totalRows = await model.kwitansi.count();
    const results = await model.kwitansi.findAll({
      where: {
        [Op.or]: [
          {
            no_kwt: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
      },
      include: [
        {
          model: model.psppd,
          include: [
            {
              model: model.spt,
              include: [
                {
                  model: model.kegiatan,
                  include: [
                    {
                      model: model.lsnamajbatan,
                      as: "lsnamajbatan",
                    },
                  ],
                },
              ],
            },
            {
              model: model.rincianpsppd,
              as: "rincianpsppd",
              include: [
                {
                  model: model.rekeningAng,
                },
              ],
            },
          ],
        },
      ],
      offset: pagination.page * pagination.perPage,
      limit: pagination.perPage,
      order: [["createdAt", "DESC"]],
    });
    if (results.length > 0) {
      return res.status(200).json({
        success: true,
        massage: "Get All Kwitansi",
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

const addKwintasi = async (req, res) => {
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.kwitansi.create(req.body, {
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
      res.status(406).json({
        success: false,
        massage: "Gagal nambah data",
      });
    }
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};

const updateKwintasi = async (req, res) => {
  let id = req.params.id;
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.kwitansi.update(
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
      res.status(406).json({
        success: false,
        massage: "Gagal update data",
      });
    }
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};

const deleteKwintasi = async (req, res) => {
  let id = req.params.id;
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.kwitansi.destroy(
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
      res.status(406).json({
        success: false,
        massage: "Gagal Hapus data",
      });
    }
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};

const getOneKwintasi = async (req, res) => {
  try {
    const result = await model.kwitansi.findOne({
      where: {
        id: req.params.id,
      },
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
  getAllKwitansi,
  addKwintasi,
  updateKwintasi,
  deleteKwintasi,
  getOneKwintasi,
};
