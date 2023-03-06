"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("jumPen", {
        jumpen_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nama: {
          type: Sequelize.STRING,
        },
        tahun: {
          type: Sequelize.STRING,
        },
        jumlah: {
          type: Sequelize.BIGINT,
          defaultValue: 0,
        },
        sumberpen_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "sumberPen",
            key: "sumberpen_id",
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
        queryInterface.addIndex("jumPen", ["jumpen_id", "nama", "jumlah"])
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("jumPen");
  },
};
