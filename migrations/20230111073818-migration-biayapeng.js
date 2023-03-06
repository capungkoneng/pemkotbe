"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface
      .createTable("bpsppd", {
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
        peselon1: {
          type: Sequelize.BIGINT,
          defaultValue: 0,
        },
        peselon2: {
          type: Sequelize.BIGINT,
          defaultValue: 0,
        },
        g3eselon3: {
          type: Sequelize.BIGINT,
          defaultValue: 0,
        },
        g4eselon4: {
          type: Sequelize.BIGINT,
          defaultValue: 0,
        },
        g2eselon1: {
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
      .then(() =>
        queryInterface.addIndex("bpsppd", [
          "id",
          "provinsi",
          "peselon1",
          "peselon2",
          "g3eselon3",
          "g4eselon4",
          "g2eselon1",
        ])
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("bpsppd");
  },
};
