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
    let results;
    const totalRows = await model.psppd.count();
    if (req.query.page === undefined) {
      results = await model.pegawai.findAll({
        include: [
          {
            model: model.spd,
          },
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
            model: model.docppsppd,
            as: "docppsppd",
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
          {
            model: model.vd,
            as: "veri",
          },
        ],
      });
    } else {
      results = await model.psppd.findAll({
        where: {
          [Op.or]: [
            {
              nama: {
                [Op.like]: "%" + search + "%",
              },
            },
            {
              nik: {
                [Op.like]: "%" + search + "%",
              },
            },
          ],
        },
        include: [
          {
            model: model.spd,
          },
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
            model: model.docppsppd,
            as: "docppsppd",
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
          {
            model: model.vd,
            as: "veri",
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
        massage: "Get All PertanggungJwban",
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

const getAllPsppdByNik = async (req, res) => {
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
        nik: req.params.nik,
      },
      include: [
        {
          model: model.spd,
        },
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
          model: model.docppsppd,
          as: "docppsppd",
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
        {
          model: model.vd,
          as: "veri",
        },
      ],
      offset: pagination.page * pagination.perPage,
      limit: pagination.perPage,
      order: [["createdAt", "DESC"]],
    });
    if (results.length > 0) {
      return res.status(200).json({
        success: true,
        massage: "Get All PertanggungJwban",
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
  const newArrPsppd = [];
  const newArrBa = [];

  if (!req.files) {
    return res.status(404).json({ msg: "tidak ada gambar" });
  }

  if (req.body.docppsppd) {
    const arrPsppd = JSON.parse(req.body.docppsppd);
    for (let index = 0; index < arrPsppd.length; index++) {
      newArrPsppd.push({
        upload: req.files[index].path,
      });
    }
  }

  if (req.body.rincianpsppd) {
    const arrBa = JSON.parse(req.body.rincianpsppd);
    for (let index = 0; index < arrBa.length; index++) {
      newArrBa.push({
        kode_rek: arrBa[index].kode_rek,
        keterangan: arrBa[index].keterangan,
        satuan: arrBa[index].satuan,
        vol: arrBa[index].vol,
        biaya: arrBa[index].biaya,
        total: arrBa[index].total,
      });
    }
  }

  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.psppd.create(
      {
        no_spd: req.body.no_spd,
        nik: req.body.nik,
        nama: req.body.nama,
        no_spt: req.body.no_spt,
        tgl_berangkat: req.body.tgl_berangkat,
        tgl_mulai: req.body.tgl_mulai,
        tgl_pulang: req.body.tgl_pulang,
        tujuan: req.body.tujuan,
        docppsppd: newArrPsppd,
        rincianpsppd: newArrBa,
      },
      {
        include: ["docppsppd", "rincianpsppd"],
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

const veriDoc = async (req, res) => {
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.vd.bulkCreate(req.body, {
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

const updatePsppd = async (req, res) => {
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const updateVerify = req.body.map((updateByveri) => {
      return {
        id: updateByveri.id,
        nilai_disetujui: updateByveri.nilai_disetujui,
        verify: updateByveri.verify,
      };
    });
    let result = [];
    for (let index = 0; index < updateVerify.length; index++) {
      const updateResult = await model.rincianpsppd.update(
        {
          nilai_disetujui: updateVerify[index].nilai_disetujui,
          verify: updateVerify[index].verify,
        },
        {
          where: {
            id: updateVerify[index].id,
          },
          returning: true,
        },
        { transaction: transaction.data }
      );
      const masterRek = await model.rekeningAng.findOne({
        where: {
          kode: updateVerify[index].kode,
        },
      });
      const total =
        parseInt(masterRek.total) -
        parseInt(updateVerify[index].nilai_disetujui);
      console.log(total);
      await model.rekeningAng.update(
        {
          total: total,
        },
        {
          where: {
            kode: updateVerify[index].kode,
          },
        }
      );
      result = [...result, updateResult];
    }
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
      res.status(406).json({
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
      return res.status(400).json({ success: false, msg: "no data" });
    }
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};

const getAllKwitansiRincian = async (req, res) => {
  const search = req.query.search || "";

  try {
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
    });
    if (results.length > 0) {
      return res.status(200).json({
        success: true,
        massage: "Get All Kwitansi",
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

module.exports = {
  getAllPsppd,
  addPsppd,
  updatePsppd,
  deletePsppd,
  getOnePsppd,
  getAllPsppdByNik,
  veriDoc,
  getAllKwitansiRincian,
};
