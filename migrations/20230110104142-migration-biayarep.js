"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("brsppd", {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        uraian: {
          type: Sequelize.STRING,
        },
        satuan: {
          type: Sequelize.STRING,
        },
        luar_kota: {
          type: Sequelize.BIGINT,
          defaultValue: 0,
        },
        dalam_kota: {
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
      .then(() => queryInterface.addIndex("brsppd", ["id", "uraian"]));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("brsppd");
  },
};
