"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("kwitansi", {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        no_spd: {
          type: Sequelize.STRING,
          unique: true,
        },
        no_spt: {
          type: Sequelize.STRING,
          unique: true,
        },
        nik: {
          type: Sequelize.STRING,
          unique: true,
        },
        nama: {
          type: Sequelize.STRING,
        },
        tgl: {
          type: Sequelize.DATE,
        },
        no_kwt: {
          type: Sequelize.STRING,
          unique: true,
        },
        tgl_berangkat: {
          type: Sequelize.DATE,
        },
        tgl_mulai: {
          type: Sequelize.DATE,
        },
        tgl_pulang: {
          type: Sequelize.DATE,
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
        kode_rek: {
          type: Sequelize.STRING,
        },
        bidang: {
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
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
      })
      .then(() =>
        queryInterface.addIndex("kwitansi", [
          "id",
          "no_spd",
          "nama",
          "no_spt",
          "nik",
          "no_kwt",
        ])
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("kwitansi");
  },
};
