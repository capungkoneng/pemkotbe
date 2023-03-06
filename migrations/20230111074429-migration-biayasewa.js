"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("bskendaraan", {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        provinsi: {
          type: Sequelize.STRING,
        },
        satuan: {
          type: Sequelize.STRING,
        },
        roda4: {
          type: Sequelize.BIGINT,
          defaultValue: 0,
        },
        roda6_biskecil: {
          type: Sequelize.BIGINT,
          defaultValue: 0,
        },
        roda6_bisbesar: {
          type: Sequelize.BIGINT,
          defaultValue: 0,
        },
        taxi: {
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
        queryInterface.addIndex("bskendaraan", [
          "id",
          "provinsi",
          "roda4",
          "roda6_bisbesar",
          "roda6_biskecil",
        ])
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("bskendaraan");
  },
};
