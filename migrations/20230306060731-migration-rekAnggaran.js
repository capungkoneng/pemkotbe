"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("rekAnggaran", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      kode: {
        type: Sequelize.STRING,
        references: {
          model: "rekeningAng",
          key: "kode",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      keperluan: {
        type: Sequelize.TEXT,
      },
      total: {
        type: Sequelize.BIGINT,
        defaultValue: 0,
      },
      kode_urusan: {
        type: Sequelize.STRING,
        references: {
          model: "urusan",
          key: "kode_urusan",
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
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("rekAnggaran");
  },
};
