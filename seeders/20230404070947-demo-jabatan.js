"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "jabatan",
      [
        {
          nama: "Sekretaris",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Kepala Dinas Pangan dan Pertanian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Kepala UPTD Balai Benih Ikan Air Tawar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Kepala Bidang Pertanian dan Perikanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Perencana Ahli Muda",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Kepala Sub Bagian Umum dan Kepegawaian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Kepala UPTD Puskeswan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Medik Veteriner Ahli Muda",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Analis Kebijakan Ahli Muda",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Kepala Bidang Ketahanan Pangan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Kepala Seksi Perikanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Pengadministrasi Koleksi Tumbuhan Seksi Pertanian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Analis Ketahanan Pangan Ahli Muda",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Analis Ketahanan Pangan Ahli Muda",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Kepala Sub Bagian TU UPTD Puskeswan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Analis Budidaya Perikanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Pengadministrasi Umum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Kepala Sub Bagian TU UPTD Puskeswan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Analis Informasi Hasil Pertanian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Analis Pangan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Analis Laporan Keuangan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Analis Perencanaan, Evaluasi dan Pelaporan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Pengelola Teknologi Pascapanen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Analis Pangan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Analis Perikanan Budidaya ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Bendahara (Penerimaan)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Pengelola Data",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Analis Rencana Program dan Kegiatan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Pengawas Sanitasi Usaha Peternakan dan Kesmavet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama:
            "Pengelola Kesehatan Hewan dan Kesehatan Masyarakat Veteriner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Bendahara (Pengeluaran)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Penyuluh Pertanian Terampil Mahir",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Penyuluh Pertanian Terampil Mahir",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Analis Sumber Daya Manusia Aparatur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Pengelola Keuangan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Pengelola Keuangan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Penyuluh Pertanian Terampil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Penyuluh Pertanian Terampil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Kustodian Kekayaan Negara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Pengelola Statistik Perikanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Pengadministrasi Umum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Pengelola Ketahanan Pangan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Pengadministrasi Umum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Pengadministrasi Umum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Teknisi Instalasi Budidaya",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Pramu Kebersihan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("jabatan", null, {});
  },
};
