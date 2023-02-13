"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface
      .createTable("kota", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nama: {
          type: Sequelize.STRING,
        },
      })
      .then(() =>
        queryInterface.addIndex("kota", ["id", "nama"])
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("kota");
  },
};
