"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("np2d", {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        no_np2d: {
          type: Sequelize.STRING,
          unique: true,
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
        psppd_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          references: {
            model: "psppd",
            key: "id",
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
        queryInterface.addIndex("np2d", ["id", "no_np2d", "kode_urusan"])
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("np2d");
  },
};
