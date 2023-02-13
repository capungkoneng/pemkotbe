"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface
      .createTable("provinsi", {
        prov_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        prov_name: {
          type: Sequelize.STRING,
        },
        locationid: {
          type: Sequelize.INTEGER,
        },
        status: {
          type: Sequelize.INTEGER,
        },
      })
      .then(() =>
        queryInterface.addIndex("provinsi", ["prov_id", "prov_name"])
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("provinsi");
  },
};
