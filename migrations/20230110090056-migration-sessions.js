"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("sessions", {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          references: {
            model: "users",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        ip_address: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        is_bloked: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        acces_token: {
          type: Sequelize.STRING,
        },
        lat: {
          type: Sequelize.STRING,
        },
        long: {
          type: Sequelize.STRING,
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
        queryInterface.addIndex("sessions", ["id", "user_id", "ip_address"])
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("sessions");
  },
};
