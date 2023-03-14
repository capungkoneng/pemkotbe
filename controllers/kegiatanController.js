const model = require("../models");
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const Pagination = require("../config/pagging");
const url = require("url");
const t = require("../config/transaksi");

const getAllKegiatan = async (req, res) => {
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
    const totalRows = await model.kegiatan.count();
    const results = await model.kegiatan.findAll({
      where: {
        [Op.or]: [
          {
            keperluan: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
      },
      include: [
        {
          model: model.lsjabatan,
          as: "lsjabatan",
        },
      ],
      offset: pagination.page * pagination.perPage,
      limit: pagination.perPage,
      order: [["createdAt", "DESC"]],
    });
    if (results.length > 0) {
      return res.status(200).json({
        success: true,
        massage: "Get All Kegiatan",
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

const getAllKegiatanByStat = async (req, res) => {
  try {
    const search = req.query.search || "";
    const results = await model.kegiatan.findAll({
      where: {
        status: "3",
      },
    });
    if (results.length > 0) {
      return res.status(200).json({
        success: true,
        massage: "Get All Kegiatan",
        result: results,
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

const addKegiatan = async (req, res) => {
  const newArrLsJabatan = [];

  if (!req.file) {
    return res.status(404).json({ msg: "tidak ada gambar" });
  }

  if (req.body.lsjabatan) {
    const arrLsJabatan = JSON.parse(req.body.lsjabatan);
    for (let index = 0; index < arrLsJabatan.length; index++) {
      newArrLsJabatan.push({
        nama: arrLsJabatan[index].nama,
      });
    }
  }
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.kegiatan.create(
      {
        id: uuidv4(),
        keperluan: req.body.keperluan,
        no_surat: req.body.no_surat,
        lokasi: req.body.lokasi,
        tgl_berangkat: req.body.tgl_berangkat,
        tgl_mulai: req.body.tgl_mulai,
        tgl_selesai: req.body.tgl_selesai,
        tujuan_provinsi: req.body.tujuan_provinsi,
        kota: req.body.kota,
        berangkat: req.body.berangkat,
        tahun_anggaran: req.body.tahun_anggaran,
        keterangan: req.body.keterangan,
        rekomendasi: req.body.rekomendasi,
        upload: req.file.path,
        lsjabatan: newArrLsJabatan,
        status: req.body.status_kegiatan,
      },
      {
        include: ["lsjabatan"],
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

const addKegiatanNamaPeg = async (req, res) => {
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.lsnamajbatan.bulkCreate(req.body.pegawai, {
      transaction: transaction.data,
    });
    // commit transaction
    await model.kegiatan.update(
      {
        status: req.body.status_kegiatan,
      },
      {
        where: {
          id: req.body.id,
        },
      },
      { transaction: transaction.data }
    );
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

const updateKegiatan = async (req, res) => {
  let id = req.params.id;
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.kegiatan.update(
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

const deleteKegiatan = async (req, res) => {
  let id = req.params.id;
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.kegiatan.destroy(
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

const getOneKegiatan = async (req, res) => {
  try {
    const result = await model.kegiatan.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: model.lsjabatan,
          as: "lsjabatan",
        },
      ],
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

const getOneKegiatanNamaPeg = async (req, res) => {
  try {
    const result = await model.kegiatan.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: model.lsnamajbatan,
          as: "lsnamajbatan",
        },
      ],
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
  getAllKegiatan,
  addKegiatan,
  updateKegiatan,
  deleteKegiatan,
  getOneKegiatan,
  addKegiatanNamaPeg,
  getOneKegiatanNamaPeg,
  getAllKegiatanByStat
};
