"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "golongan",
      [
        {
          nama: "IV/b",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "IV/a",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "III/d",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "III/c",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "III/b",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "III/a",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "II/d",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "II/c",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "II/b",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "I/d",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "I/c",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("golongan", null, {});
  },
};
