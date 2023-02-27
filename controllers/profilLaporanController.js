const model = require("../models");
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const t = require("../config/transaksi");

const getAllLaporanPro = async (req, res) => {
  try {
    const result = await model.profilLaporan.findAll({});
    if (result.length) {
      return res.status(200).json({ succes: true, msg: result });
    } else {
      return res.status(404).json({ success: false, msg: "no data" });
    }
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};

const addLaporanPro = async (req, res) => {
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.profilLaporan.create(
      {
        id: uuidv4(),
        nama_pemerintah: req.body.nama_pemerintah,
        nama_kantor: req.body.nama_kantor,
        alamat: req.body.alamat,
        telp: req.body.telp,
        website: req.body.website,
        email: req.body.email,
        kodepos: req.body.kodepos,
        kota: req.body.kota,
        provinsi: req.body.provinsi,
        logo: req.file.path,
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

module.exports = {
  getAllLaporanPro,
  addLaporanPro,
};
