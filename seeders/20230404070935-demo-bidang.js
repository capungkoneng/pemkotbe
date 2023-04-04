"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "bidang",
      [
        {
          id: uuidv4(),
          nama: "Sekretariat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Dinas Pangan dan Pertanian Kota Cimahi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "UPTD BBIAT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Bidang Pertanian dan Perikanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Dinas Pangan dan Pertanian Kota Cimahi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Sub Bagian Umum dan Kepegawaian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "UPTD Puskeswan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Dinas Pangan dan Pertanian Kota Cimahi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Dinas Pangan dan Pertanian Kota Cimahi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Bidang Ketahanan Pangan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Seksi Perikanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Bidang Pertanian dan Perikanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Dinas Pangan dan Pertanian Kota Cimahi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Dinas Pangan dan Pertanian Kota Cimahi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "UPTD Puskeswan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Seksi Perikanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Bidang Ketahanan Pangan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "UPTD Puskeswan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Bidang Pertanian dan Perikanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Bidang Ketahanan Pangan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Sekretariat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Sekretariat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Bidang Ketahanan Pangan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Bidang Ketahanan Pangan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Sub Bagian TU UPTD BBIAT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Sekretariat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Sub Bagian TU UPTD PUSKESWAN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Bidang Pertanian dan Perikanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Sekretariat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Bidang Pertanian dan Perikanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Sub Bagian TU UPTD PUSKESWAN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Sekretariat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Dinas Pangan dan Pertanian Kota Cimahi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Dinas Pangan dan Pertanian Kota Cimahi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Sub Bagian Umum dan Kepegawaian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Sub Bagian TU UPTD BBIAT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Sub Bagian TU UPTD PUSKESWAN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Dinas Pangan dan Pertanian Kota Cimahi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Dinas Pangan dan Pertanian Kota Cimahi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Sub Bagian Umum dan Kepegawaian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Seksi Perikanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Sub Bagian TU UPTD BBIAT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Bidang Ketahanan Pangan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Sub Bagian TU UPTD PUSKESWAN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Sub Bagian Umum dan Kepegawaian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Bidang Ketahanan Pangan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Bidang Pertanian dan Perikanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          nama: "Sub Bagian TU UPTD BBIAT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("bidang", null, {});
  },
};
