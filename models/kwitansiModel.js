module.exports = (sequelize, DataTypes) => {
  const kwitansi = sequelize.define(
    "kwitansi",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      no_spd: {
        type: DataTypes.STRING,
        unique: true,
      },
      no_spt: {
        type: DataTypes.STRING,
        unique: true,
      },
      nik: {
        type: DataTypes.STRING,
        unique: true,
      },
      nama: {
        type: DataTypes.STRING,
      },
      tgl: {
        type: DataTypes.DATE,
      },
      no_kwt: {
        type: DataTypes.STRING,
        unique: true,
      },
      tgl_berangkat: {
        type: DataTypes.DATE,
      },
      tgl_mulai: {
        type: DataTypes.DATE,
      },
      tgl_pulang: {
        type: DataTypes.DATE,
      },
      tujuan: {
        type: DataTypes.STRING,
      },
      kegiatan: {
        type: DataTypes.STRING,
      },
      sub_kegiatan: {
        type: DataTypes.STRING,
      },
      kode_rek: {
        type: DataTypes.STRING,
      },
      bidang: {
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
      tableName: "kwitansi",
      timestamp: true,
      paranoid: true,
    }
  );
  kwitansi.associate = (models) => {
    kwitansi.hasMany(models.vkwitansi, {
      foreignKey: "kwitansi_id",
      as: "vkwitansi",
    });
  };
  return kwitansi;
};
