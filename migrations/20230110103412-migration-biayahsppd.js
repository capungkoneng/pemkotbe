"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("bhsppd", {
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
        luar_kota: {
          type: Sequelize.BIGINT,
          defaultValue: 0,
        },
        dalam_kota: {
          type: Sequelize.BIGINT,
          defaultValue: 0,
        },
        diklat: {
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
      })
      .then(() => queryInterface.addIndex("bhsppd", ["id","provinsi"]));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("bhsppd");
  },
};
