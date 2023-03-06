module.exports = (sequelize, DataTypes) => {
  const kegiatanAnggaran = sequelize.define(
    "kegiatanAnggaran",
    {
      keg_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      kode_kegiatan_anggaran: {
        type: DataTypes.STRING,
        unique: true,
      },
      nama_kegiatan_anggaran: {
        type: DataTypes.TEXT,
      },
      kode_program: {
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
      tableName: "kegiatanAnggaran",
      timestamp: true,
      paranoid: true,
    }
  );
  kegiatanAnggaran.associate = (models) => {
    kegiatanAnggaran.belongsTo(models.program, {
      foreignKey: "kode_program",
      targetKey: "kode_program",
    });
    kegiatanAnggaran.hasMany(models.SubkegiatanAnggaran, {
      foreignKey: "kode_kegiatan_anggaran",
      sourceKey: "kode_kegiatan_anggaran",
    });
    kegiatanAnggaran.belongsTo(models.AnggaranUrusan, {
      foreignKey: "kode_kegiatan_anggaran",
      targetKey: "kode_kegiatan_anggaran",
    });
  };
  return kegiatanAnggaran;
};
