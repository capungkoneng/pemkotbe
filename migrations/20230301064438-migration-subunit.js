"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("subunit", {
        subunit_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        sub_kode_unit: {
          type: Sequelize.STRING,
          unique: true,
        },
        sub_nama_unit: {
          type: Sequelize.STRING,
        },
        kode_unit: {
          type: Sequelize.STRING,
          references: {
            model: "unit",
            key: "kode_unit",
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
        queryInterface.addIndex("subunit", [
          "subunit_id",
          "sub_kode_unit",
          "sub_nama_unit",
          "kode_unit",
        ])
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("subunit");
  },
};
