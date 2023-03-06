"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("urusan", {
      urusan_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      kode_urusan: {
        type: Sequelize.STRING,
        unique: true,
      },
      nama_urusan: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("urusan");
  },
};
