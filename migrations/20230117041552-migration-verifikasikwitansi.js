"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("vkwitansi", {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        uraian: {
          type: Sequelize.STRING,
        },
        nilai_rill: {
          type: Sequelize.STRING,
        },
        nilai_disetujui: {
          type: Sequelize.STRING,
        },
        kwitansi_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          references: {
            model: "kwitansi",
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
      })
      .then(() => queryInterface.addIndex("vkwitansi", ["id", "uraian"]));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("vkwitansi");
  },
};
