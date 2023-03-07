const model = require("../models");
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const Pagination = require("../config/pagging");
const url = require("url");
const t = require("../config/transaksi");

const getAllPageAnggaranUrusan = async (req, res) => {
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
    const totalRows = await model.AnggaranUrusan.count();
    const results = await model.AnggaranUrusan.findAll({
      where: {
        [Op.or]: [
          {
            kode_urusan: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
      },
      include: [
        {
          model: model.urusan,
          include: [
            {
              model: model.rekAnggaran
            }
          ]
        },
        {
          model: model.unitOr
        },
        {
          model: model.subunit
        },
        {
          model: model.program
        },
        {
          model: model.kegiatanAnggaran
        },
        {
          model: model.SubkegiatanAnggaran
        },
        {
          model: model.sumberPen, 
          include: [
            {
              model:model.jumPen
            }
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
        massage: "Get All Anggaran",
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

const addAnggaranUrusan = async (req, res) => {
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.AnggaranUrusan.create(req.body, {
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

const updateAnggaranUrusan = async (req, res) => {
  let id = req.params.id;
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.jumPen.update(
      req.body,
      {
        where: {
          jumpen_id: id,
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

const deleteAnggaranUrusan = async (req, res) => {
  let id = req.params.id;
  try {
    // create transaction
    const transaction = await t.create();
    if (!transaction.status && transaction.error) {
      throw transaction.error;
    }
    const result = await model.jumPen.destroy(
      {
        where: {
          jumpen_id: id,
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

module.exports = {
  getAllPageAnggaranUrusan,
  addAnggaranUrusan,
  updateAnggaranUrusan,
  deleteAnggaranUrusan,
};
