module.exports = (sequelize, DataTypes) => {
  const kegiatan = sequelize.define(
    "kegiatan",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      keperluan: {
        type: DataTypes.TEXT,
      },
      no_surat: {
        type: DataTypes.STRING,
        unique: true,
      },
      lokasi: {
        type: DataTypes.STRING,
      },
      tgl_berangkat: {
        type: DataTypes.DATE,
      },
      tgl_mulai: {
        type: DataTypes.DATE,
      },
      tgl_selesai: {
        type: DataTypes.DATE,
      },
      tujuan_provinsi: {
        type: DataTypes.STRING,
      },
      kota: {
        type: DataTypes.STRING,
      },
      berangkat: {
        type: DataTypes.STRING,
      },
      tahun_anggaran: {
        type: DataTypes.STRING,
      },
      keterangan: {
        type: DataTypes.TEXT,
      },
      rekomendasi: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "0",
      },
      upload: {
        type: DataTypes.STRING,
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
      tableName: "kegiatan",
      timestamp: true,
      paranoid: true,
    }
  );
  kegiatan.associate = (models) => {
    kegiatan.hasMany(models.lsjabatan, {
      foreignKey: "kegiatan_id",
      as: "lsjabatan",
    });
    kegiatan.hasMany(models.lsnamajbatan, {
      foreignKey: "kegiatan_id",
      as: "lsnamajbatan",
    });
    kegiatan.belongsTo(models.spt, {
      foreignKey: "id",
    });
  };

  return kegiatan;
};
