"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("program", {
        prog_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        kode_program: {
          type: Sequelize.STRING,
          unique: true,
        },
        nama_program: {
          type: Sequelize.TEXT,
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
        queryInterface.addIndex("program", [
          "prog_id",
          "nama_program",
          "kode_urusan",
        ])
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("program");
  },
};
