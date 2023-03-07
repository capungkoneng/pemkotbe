"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("AnggaranUrusan", {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
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
        kode_unit: {
          type: Sequelize.STRING,
          references: {
            model: "unit",
            key: "kode_unit",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        sub_kode_unit: {
          type: Sequelize.STRING,
          references: {
            model: "subunit",
            key: "sub_kode_unit",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        kode_program: {
          type: Sequelize.STRING,
          references: {
            model: "program",
            key: "kode_program",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        kode_kegiatan_anggaran: {
          type: Sequelize.STRING,
          references: {
            model: "kegiatanAnggaran",
            key: "kode_kegiatan_anggaran",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        kode_sub_anggaran: {
          type: Sequelize.STRING,
          references: {
            model: "subKegAnggaran",
            key: "kode_sub_anggaran",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
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
        tahun_anggaran: {
          type: Sequelize.TEXT,
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
        queryInterface.addIndex("AnggaranUrusan", ["id", "tahun_anggaran"])
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("AnggaranUrusan");
  },
};
