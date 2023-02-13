"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface
      .createTable("golongan", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nama: {
          type: Sequelize.STRING,
        },
      })
      .then(() => queryInterface.addIndex("golongan", ["id", "nama"]));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("golongan");
  },
};
