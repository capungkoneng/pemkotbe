"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("rincianpsppd", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      psppd_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: "psppd",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      kode_rek: {
        type: Sequelize.STRING,
        references: {
          model: "rekeningAng",
          key: "kode",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      keterangan: {
        type: Sequelize.TEXT,
      },
      satuan: {
        type: Sequelize.STRING,
      },
      vol: {
        type: Sequelize.BIGINT,
        defaultValue: 0,
      },
      satuan: {
        type: Sequelize.STRING,
      },
      biaya: {
        type: Sequelize.BIGINT,
        defaultValue: 0,
      },
      total: {
        type: Sequelize.BIGINT,
        defaultValue: 0,
      },
      nilai_disetujui: {
        type: Sequelize.BIGINT,
        defaultValue: 0,
      },
      verify: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: null,
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
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("rincianpsppd");
  },
};
