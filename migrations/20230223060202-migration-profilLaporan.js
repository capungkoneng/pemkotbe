"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("profilLaporan", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nama_pemerintah: {
        type: Sequelize.STRING,
      },
      nama_kantor: {
        type: Sequelize.STRING,
      },
      alamat: {
        type: Sequelize.STRING,
      },
      telp: {
        type: Sequelize.STRING,
      },
      website: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      kodepos: {
        type: Sequelize.STRING,
      },
      kota: {
        type: Sequelize.STRING,
      },
      provinsi: {
        type: Sequelize.STRING,
      },
      logo: {
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
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("profilLaporan");
  },
};
