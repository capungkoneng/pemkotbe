"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface
      .createTable("pangkat", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nama: {
          type: Sequelize.STRING,
        },
      })
      .then(() => queryInterface.addIndex("pangkat", ["id", "nama"]));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("pangkat");
  },
};
