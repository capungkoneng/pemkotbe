module.exports = (sequelize, DataTypes) => {
  const spt = sequelize.define(
    "spt",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      no_spt: {
        type: DataTypes.STRING,
        unique: true,
      },
      no_d_spt: {
        type: DataTypes.STRING,
        unique: true,
      },
      tujuan_provinsi: {
        type: DataTypes.STRING,
      },
      kota: {
        type: DataTypes.STRING,
      },
      keperluan: {
        type: DataTypes.TEXT,
      },
      berkendara: {
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
      tahun_anggaran: {
        type: DataTypes.STRING,
      },
      keterangan: {
        type: DataTypes.STRING,
      },
      kegiatan_id: {
        type: DataTypes.UUID,
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
      tableName: "spt",
    }
  );
  spt.associate = (models) => {
    spt.hasOne(models.kegiatan, {
      foreignKey: "id",
      sourceKey: "kegiatan_id",
    });
    spt.belongsTo(models.spd, {
      foreignKey: "no_spt",
      sourceKey: "no_spt",
    });
  };

  return spt;
};
