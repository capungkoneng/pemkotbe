"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("pegawai", {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        nama: {
          type: Sequelize.STRING,
        },
        nip: {
          type: Sequelize.STRING,
          unique: true,
        },
        jabatan: {
          type: Sequelize.STRING,
        },
        pangkat: {
          type: Sequelize.STRING,
        },
        gol: {
          type: Sequelize.STRING,
        },
        bidang: {
          type: Sequelize.STRING,
        },
        phone: {
          type: Sequelize.STRING,
        },
        nama_bank: {
          type: Sequelize.STRING,
        },
        no_rek: {
          type: Sequelize.STRING,
          unique: true,
        },
        nama_rek: {
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
        queryInterface.addIndex("pegawai", ["id", "nama", "jabatan", "nip"])
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("pegawai");
  },
};
