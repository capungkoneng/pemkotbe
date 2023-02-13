"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("sp2d", {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        no_sp2d: {
          type: Sequelize.STRING,
          unique: true,
        },
        no_np2d: {
          type: Sequelize.STRING,
          unique: true,
        },
        nik_penerima: {
          type: Sequelize.STRING,
          unique: true,
        },
        nama_penerima: {
          type: Sequelize.STRING,
        },
        jumlah: {
          type: Sequelize.BIGINT,
          defaultValue: 0,
        },
        tgl_np2d: {
          type: Sequelize.DATE,
        },
        tgl: {
          type: Sequelize.DATE,
        },
        nama_bank: {
          type: Sequelize.STRING,
        },
        nama_rek: {
          type: Sequelize.STRING,
        },
        no_rek: {
          type: Sequelize.STRING,
          unique: true,
        },
        tujuan: {
          type: Sequelize.STRING,
        },
        kegiatan: {
          type: Sequelize.STRING,
        },
        sub_kegiatan: {
          type: Sequelize.STRING,
        },
        kode_rek_dpa: {
          type: Sequelize.STRING,
        },
        tahun_anggaran: {
          type: Sequelize.STRING,
        },
        uraian_pembayaran: {
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() =>
        queryInterface.addIndex("sp2d", [
          "id",
          "no_np2d",
          "nama_penerima",
          "nik_penerima",
          "no_sp2d",
        ])
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("sp2d");
  },
};
