"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("psppd", {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        no_spd: {
          type: Sequelize.STRING,
          references: {
            model: "spd",
            key: "no_spd",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        nik: {
          type: Sequelize.STRING,
          references: {
            model: "pegawai",
            key: "nip",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        nama: {
          type: Sequelize.STRING,
        },
        no_spt: {
          type: Sequelize.STRING,
          references: {
            model: "spt",
            key: "no_spt",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
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
        queryInterface.addIndex("psppd", [
          "id",
          "no_spd",
          "nama",
          "no_spt",
          "nik",
        ])
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("psppd");
  },
};
