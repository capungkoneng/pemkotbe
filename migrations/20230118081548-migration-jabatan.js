"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface
      .createTable("jabatan", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nama: {
          type: Sequelize.STRING,
        },
      })
      .then(() => queryInterface.addIndex("jabatan", ["id", "nama"]));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("jabatan");
  },
};
