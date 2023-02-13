"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("spd", {
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
        nip: {
          type: Sequelize.STRING,
          unique: true,
        },
        nama: {
          type: Sequelize.STRING,
        },
        no_spt: {
          type: Sequelize.STRING,
          unique: true,
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
        kegiatan: {
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
        queryInterface.addIndex("spd", ["id", "no_spd", "nama", "no_spt"])
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("spd");
  },
};
