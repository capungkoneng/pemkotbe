const model = require("../models");
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const Pagination = require("../config/pagging");
const url = require("url");
const t = require("../config/transaksi");

const getAllPegawai = async (req, res) => {
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
    const totalRows = await model.pegawai.count();
    if (req.query.page === undefined) {
      results = await model.pegawai.findAll();
    } else {
      results = await model.pegawai.findAll({
        where: {
          [Op.or]: [
            {
              nama: {
                [Op.like]: "%" + search + "%",
              },
            },
          ],
        },
        offset: pagination.page * pagination.perPage,
        limit: pagination.perPage,
        order: [["createdAt", "DESC"]],
      });
    }
    if (results.length > 0) {
      return res.status(200).json({
        success: true,
        massage: "Get All Pegawai",
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

const getAllPegawaiKepala = async (req, res) => {
  try {
    results = await model.pegawai.findAll({
      where: {
        jabatan: "Kepala Dinas Pangan dan Pertanian",
      },
    });
    if (results.length > 0) {
      return res.status(200).json({
        success: true,
        massage: "Get All Pegawai Kepala dinas",
        result: results,
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

const getAllPegawaiKepalaBidang = async (req, res) => {
  try {
    results = await model.pegawai.findAll({
      where: {
        jabatan: "Kepala Bidang Perikanan Tangkap",
      },
    });
    if (results.length > 0) {
      return res.status(200).json({
        success: true,
        massage: "Get All Pegawai Kepala dinas",
        result: results,
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

const addPegawai = async (req, res) => {
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.pegawai.create(
      {
        id: uuidv4(),
        nama: req.body.nama,
        nip: req.body.nip,
        jabatan: req.body.jabatan,
        pangkat: req.body.pangkat,
        gol: req.body.gol,
        bidang: req.body.bidang,
        phone: req.body.phone,
        nama_bank: req.body.nama_bank,
        no_rek: req.body.no_rek,
        nama_rek: req.body.nama_rek,
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

const updatePegawai = async (req, res) => {
  let id = req.params.id;
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.pegawai.update(
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

const deletePegawai = async (req, res) => {
  let id = req.params.id;
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.pegawai.destroy(
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

const getOnePegawai = async (req, res) => {
  try {
    const result = await model.pegawai.findOne({
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

const getAllPegawaiJabatan = async (req, res) => {
  try {
    const result = await model.pegawai.findAll({
      where: {
        jabatan: req.params.jabatan,
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
  getAllPegawai,
  addPegawai,
  updatePegawai,
  deletePegawai,
  getOnePegawai,
  getAllPegawaiJabatan,
  getAllPegawaiKepala,
  getAllPegawaiKepalaBidang,
};
