"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("subKegAnggaran", {
        subkeg_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        kode_sub_anggaran: {
          type: Sequelize.STRING,
          unique: true,
        },
        nama_sub_anggaran: {
          type: Sequelize.TEXT,
        },
        kode_kegiatan_anggaran: {
          type: Sequelize.STRING,
          references: {
            model: "kegiatanAnggaran",
            key: "kode_kegiatan_anggaran",
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
        queryInterface.addIndex("subKegAnggaran", [
          "subkeg_id",
          "nama_sub_anggaran",
          "kode_kegiatan_anggaran",
        ])
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("subKegAnggaran");
  },
};
