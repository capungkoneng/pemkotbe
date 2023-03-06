"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("kegiatanAnggaran", {
        keg_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        kode_kegiatan_anggaran: {
          type: Sequelize.STRING,
          unique: true,
        },
        nama_kegiatan_anggaran: {
          type: Sequelize.TEXT,
        },
        kode_program: {
          type: Sequelize.STRING,
          references: {
            model: "program",
            key: "kode_program",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
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
        queryInterface.addIndex("kegiatanAnggaran", [
          "keg_id",
          "nama_kegiatan_anggaran",
          "kode_program",
        ])
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("kegiatanAnggaran");
  },
};
