"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("kegiatan", {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        keperluan: {
          type: Sequelize.STRING,
        },
        no_surat: {
          type: Sequelize.STRING,
          unique: true,
        },
        lokasi: {
          type: Sequelize.STRING,
        },
        tgl_berangkat: {
          type: Sequelize.DATE,
        },
        tgl_mulai: {
          type: Sequelize.DATE,
        },
        tgl_selesai: {
          type: Sequelize.DATE,
        },
        tujuan_provinsi: {
          type: Sequelize.STRING,
        },
        kota: {
          type: Sequelize.STRING,
        },
        berangkat: {
          type: Sequelize.STRING,
        },
        tahun_anggaran: {
          type: Sequelize.STRING,
        },
        keterangan: {
          type: Sequelize.STRING,
        },
        rekomendasi: {
          type: Sequelize.STRING,
        },
        status: {
          type: Sequelize.STRING,
        },
        upload: {
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
      .then(() => queryInterface.addIndex("kegiatan", ["id","no_surat"]));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("kegiatan");
  },
};
