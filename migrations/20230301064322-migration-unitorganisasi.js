"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("unit", {
        unit_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        kode_unit: {
          type: Sequelize.STRING,
          unique: true,
        },
        nama_unit: {
          type: Sequelize.STRING,
        },
        kode_urusan: {
          type: Sequelize.STRING,
          references: {
            model: "urusan",
            key: "kode_urusan",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
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
        queryInterface.addIndex("unit", [
          "unit_id",
          "nama_unit",
          "kode_unit",
          "kode_urusan"
        ])
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("unit");
  },
};
