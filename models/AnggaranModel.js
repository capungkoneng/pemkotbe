module.exports = (sequelize, DataTypes) => {
  const AnggaranUrusan = sequelize.define(
    "AnggaranUrusan",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      kode_urusan: {
        type: DataTypes.STRING,
      },
      kode_unit: {
        type: DataTypes.STRING,
      },
      sub_kode_unit: {
        type: DataTypes.STRING,
      },
      kode_program: {
        type: DataTypes.STRING,
      },
      kode_kegiatan_anggaran: {
        type: DataTypes.STRING,
      },
      kode_sub_anggaran: {
        type: DataTypes.STRING,
      },
      sumberpen_id: {
        type: DataTypes.INTEGER,
      },
      jumpen_id: {
        type: DataTypes.INTEGER,
      },
      tahun_anggaran: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "AnggaranUrusan",
      timestamp: true,
      paranoid: true,
    }
  );
  AnggaranUrusan.associate = (models) => {
    AnggaranUrusan.hasMany(models.urusan, {
      foreignKey: "kode_urusan",
      sourceKey: "kode_urusan",
    });
    AnggaranUrusan.hasMany(models.program, {
      foreignKey: "kode_program",
      sourceKey: "kode_program",
    });
    AnggaranUrusan.hasMany(models.unitOr, {
      foreignKey: "kode_unit",
      sourceKey: "kode_unit",
    });
    AnggaranUrusan.hasMany(models.kegiatanAnggaran, {
      foreignKey: "kode_kegiatan_anggaran",
      sourceKey: "kode_kegiatan_anggaran",
    });
    AnggaranUrusan.hasMany(models.SubkegiatanAnggaran, {
      foreignKey: "kode_sub_anggaran",
      sourceKey: "kode_sub_anggaran",
    });
    AnggaranUrusan.hasMany(models.jumPen, {
      foreignKey: "jumpen_id",
      sourceKey: "jumpen_id",
    });
    AnggaranUrusan.hasMany(models.sumberPen, {
      foreignKey: "sumberpen_id",
      sourceKey: "sumberpen_id",
    });
    AnggaranUrusan.hasMany(models.subunit, {
      foreignKey: "sub_kode_unit",
      sourceKey: "sub_kode_unit",
    });
  };
  return AnggaranUrusan;
};
