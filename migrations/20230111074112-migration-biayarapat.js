"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("brlk", {
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
        fullboard_luarkota: {
          type: Sequelize.BIGINT,
          defaultValue: 0,
        },
        fullboard_dalemkota: {
          type: Sequelize.BIGINT,
          defaultValue: 0,
        },
        fullday: {
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
      .then(() => queryInterface.addIndex("brlk", ["id", "provinsi"]));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("brlk");
  },
};
