"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("vdsppd", {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        nama_dokumen: {
          type: Sequelize.STRING,
        },
        keterangan: {
          type: Sequelize.STRING,
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
      })
      .then(() => queryInterface.addIndex("vdsppd", ["id", "nama_dokumen"]));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("vdsppd");
  },
};
