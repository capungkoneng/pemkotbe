"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("lsnamajbatan", {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        nama: {
          type: Sequelize.STRING,
        },
        nama_pegawai: {
          type: Sequelize.STRING,
        },
        kegiatan_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          references: {
            model: "kegiatan",
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
      .then(() => queryInterface.addIndex("lsnamajbatan", ["id", "nama"]));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("lsnamajbatan");
  },
};
