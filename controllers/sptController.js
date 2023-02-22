const model = require("../models");
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const Pagination = require("../config/pagging");
const url = require("url");
const t = require("../config/transaksi");
const { sequelize } = require("../models");

const getAllSpt = async (req, res) => {
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
    let results;
    const totalRows = await model.spt.count();
    if (req.query.page === undefined) {
      results = await model.spt.findAll({
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
      });
    } else {
      results = await model.spt.findAll({
        attributes: ["kegiatan_id", "no_spt", "createdAt", "updatedAt"],
        where: {
          [Op.or]: [
            {
              no_spt: {
                [Op.like]: "%" + search + "%",
              },
            },
          ],
        },
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
        offset: pagination.page * pagination.perPage,
        limit: pagination.perPage,
        order: [["createdAt", "DESC"]],
      });
    }
    if (results.length > 0) {
      return res.status(200).json({
        success: true,
        massage: "Get All Biaya Spt",
        result: results,
        page: pagination.page,
        limit: pagination.perPage,
        totalData: totalRows,
        currentPage: pagination.currentPage,
        nextPage: pagination.next(),
        previouspage: pagination.prev(),
      });
    } else {
      return res.status(404).json({
        success: false,
        massage: "No data",
      });
    }
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};

const addSpt = async (req, res) => {
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.spt.create(
      {
        id: uuidv4(),
        no_spt: req.body.no_spt,
        no_d_spt: req.body.no_d_spt,
        tujuan_provinsi: req.body.tujuan_provinsi,
        kota: req.body.kota,
        keperluan: req.body.keperluan,
        berkendara: req.body.berkendara,
        tgl_berangkat: req.body.tgl_berangkat,
        tgl_mulai: req.body.tgl_mulai,
        tgl_selesai: req.body.tgl_selesai,
        tahun_anggaran: req.body.tahun_anggaran,
        keterangan: req.body.keterangan,
        upload: req.body.upload,
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
      res.status(404).json({
        success: false,
        massage: "Gagal nambah data",
      });
    }
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};

const updateSpt = async (req, res) => {
  let id = req.params.id;
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.spt.update(
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

const deleteSpt = async (req, res) => {
  let id = req.params.id;
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.spt.destroy(
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

const getOneSpt = async (req, res) => {
  try {
    const result = await model.spt.findOne({
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
  getAllSpt,
  addSpt,
  updateSpt,
  deleteSpt,
  getOneSpt,
};
