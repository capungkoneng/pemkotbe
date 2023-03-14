"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("detailRekAnggaran", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      judul: {
        type: Sequelize.TEXT,
      },
      keperluan: {
        type: Sequelize.TEXT,
      },
      jumlah_peserta: {
        type: Sequelize.BIGINT,
        defaultValue: 0,
      },
      jenis: {
        type: Sequelize.STRING,
      },
      jumlah: {
        type: Sequelize.BIGINT,
        defaultValue: 0,
      },
      grandtotal: {
        type: Sequelize.BIGINT,
        defaultValue: 0,
      },
      rek_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: "rekAnggaran",
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
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("detailRekAnggaran");
  },
};
