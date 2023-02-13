"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface
      .createTable("berkendara", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nama: {
          type: Sequelize.STRING,
        },
      })
      .then(() => queryInterface.addIndex("berkendara", ["id", "nama"]));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("berkendara");
  },
};
