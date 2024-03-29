"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("spt", {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        no_spt: {
          type: Sequelize.STRING,
          unique: true,
        },
        no_d_spt: {
          type: Sequelize.STRING,
          unique: true,
        },
        tujuan_provinsi: {
          type: Sequelize.STRING,
        },
        kota: {
          type: Sequelize.STRING,
        },
        keperluan: {
          type: Sequelize.TEXT,
        },
        berkendara: {
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
        tahun_anggaran: {
          type: Sequelize.STRING,
        },
        keterangan: {
          type: Sequelize.STRING,
        },
        kegiatan_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          references: {
            model: "kegiatan",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        status: {
          type: Sequelize.STRING,
          defaultValue: "0",
        },
        status_spd: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
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
      .then(() => queryInterface.addIndex("spt", ["id", "no_spt"]));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("spt");
  },
};
