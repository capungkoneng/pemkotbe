const model = require("../models");
const { Op } = require("sequelize");
const Pagination = require("../config/pagging");
const url = require("url");
const t = require("../config/transaksi");

const getAllPageLaporan = async (req, res) => {
  try {
    const search = req.query.search || "";
    const searchnama = req.query.searchnama || "";
    const filter = req.query.filter || "";
    const hostname = req.headers.host;
    const pathname = url.parse(req.url).pathname;
    const pagination = new Pagination(
      req.query.page,
      req.query.perPage,
      hostname,
      pathname
    );
    const results = await model.pegawai.findAll({
      attributes: ["nip", "nama", "createdAt", "updatedAt"],
      where: {
        [Op.or]: [
          {
            bidang: {
              [Op.like]: "%" + filter + "%",
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
              attributes: ["createdAt", "updatedAt"],
              required: true, // will create a left join
              include: [
                {
                  model: model.kegiatan,
                  attributes: ["keperluan", "createdAt", "updatedAt"],
                  required: true, // will create a left join
                },
              ],
            },
            {
              model: model.rincianpsppd,
              as: "rincianpsppd",
              attributes: ["total", "createdAt", "updatedAt"],
              required: true, // will create a left join
            },
          ],
          attributes: [
            "nik",
            "tgl_berangkat",
            "tgl_pulang",
            "tgl_mulai",
            "tujuan",
            "createdAt",
            "updatedAt",
          ],
          where: {
            [Op.or]: [
              {
                nik: {
                  [Op.like]: "%" + search + "%",
                },
                nama: {
                  [Op.like]: "%" + searchnama + "%",
                },
              },
            ],
          },
          required: true, // will create a left join
        },
      ],
      offset: pagination.page * pagination.perPage,
      limit: pagination.perPage,
      order: [["createdAt", "DESC"]],
    });
    if (results.length > 0) {
      return res.status(200).json({
        success: true,
        massage: "Get All Laporan",
        result: results,
        page: pagination.page,
        limit: pagination.perPage,
        totalData: results.length,
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

const getAllPageLaporanAnggaran = async (req, res) => {
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
    const results = await model.rekeningAng.findAll({
      required: true,
      include: [
        {
          model: model.rekAnggaran,
          include: [
            {
              model: model.detailRekAnggaran,
            },
          ],
        },
        {
          model: model.rincianpsppd,
          require: false,
        }
      ],
      offset: pagination.page * pagination.perPage,
      limit: pagination.perPage,
      order: [["createdAt", "DESC"]],
    });
    if (results.length > 0) {
      return res.status(200).json({
        success: true,
        massage: "Get All Laporan Anggaran",
        result: results,
        page: pagination.page,
        limit: pagination.perPage,
        totalData: results.length,
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

module.exports = {
  getAllPageLaporan,
  getAllPageLaporanAnggaran,
};
