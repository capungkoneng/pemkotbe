module.exports = (sequelize, DataTypes) => {
  const sumberPen = sequelize.define(
    "sumberPen",
    {
      sumberpen_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nama_sumber_pendanaan: {
        type: DataTypes.STRING,
      },
      kode_sub_anggaran: {
        type: DataTypes.STRING,
      },
      lokasi_kegiatan: {
        type: DataTypes.TEXT,
      },
      waktu_mulai: {
        type: DataTypes.DATE,
      },
      waktu_selesai: {
        type: DataTypes.DATE,
      },
      kelompok_saran: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
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
      tableName: "sumberPen",
      timestamp: true,
      paranoid: true,
    }
  );
  sumberPen.associate = (models) => {
    sumberPen.belongsTo(models.SubkegiatanAnggaran, {
      foreignKey: "kode_sub_anggaran",
      targetKey: "kode_sub_anggaran",
    });
    sumberPen.hasMany(models.jumPen, {
      foreignKey: "sumberpen_id",
      sourceKey: "sumberpen_id",
    });
    sumberPen.belongsTo(models.AnggaranUrusan, {
      foreignKey: "sumberpen_id",
      targetKey: "sumberpen_id",
    });
    sumberPen.hasMany(models.rekAnggaran, {
      foreignKey: "sumberpen_id",
      sourceKey: "sumberpen_id",
    });
    sumberPen.belongsTo(models.rekAnggaran, {
      foreignKey: "sumberpen_id",
      targetKey: "sumberpen_id",
    });
  };
  return sumberPen;
};
