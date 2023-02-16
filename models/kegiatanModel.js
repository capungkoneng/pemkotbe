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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
      },
      rekomendasi: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
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
    },
    {
      tableName: "kegiatan",
    }
  );
  kegiatan.associate = (models) => {
    kegiatan.hasMany(models.lsjabatan, {
      foreignKey: "kegiatan_id",
      as: "lsjabatan",
    });
  };

  return kegiatan;
};
