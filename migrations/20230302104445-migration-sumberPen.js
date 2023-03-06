"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("sumberPen", {
        sumberpen_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nama_sumber_pendanaan: {
          type: Sequelize.STRING,
        },
        kode_sub_anggaran: {
          type: Sequelize.STRING,
          references: {
            model: "subKegAnggaran",
            key: "kode_sub_anggaran",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        lokasi_kegiatan: {
          type: Sequelize.TEXT,
        },
        waktu_mulai: {
          type: Sequelize.DATE,
        },
        waktu_selesai: {
          type: Sequelize.DATE,
        },
        kelompok_saran: {
          type: Sequelize.BIGINT,
          defaultValue: 0,
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
        queryInterface.addIndex("sumberPen", [
          "sumberpen_id",
          "nama_sumber_pendanaan",
          "kode_sub_anggaran",
        ])
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("sumberPen");
  },
};
