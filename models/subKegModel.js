module.exports = (sequelize, DataTypes) => {
  const SubkegiatanAnggaran = sequelize.define(
    "SubkegiatanAnggaran",
    {
      subkeg_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      kode_sub_anggaran: {
        type: DataTypes.STRING,
        unique: true,
      },
      nama_sub_anggaran: {
        type: DataTypes.TEXT,
      },
      kode_kegiatan_anggaran: {
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
      tableName: "subKegAnggaran",
      timestamp: true,
      paranoid: true,
    }
  );
  SubkegiatanAnggaran.associate = (models) => {
    SubkegiatanAnggaran.belongsTo(models.kegiatanAnggaran, {
      foreignKey: "kode_kegiatan_anggaran",
      targetKey: "kode_kegiatan_anggaran",
    });
    SubkegiatanAnggaran.hasMany(models.sumberPen, {
      foreignKey: "kode_sub_anggaran",
      sourceKey: "kode_sub_anggaran",
    });
    SubkegiatanAnggaran.belongsTo(models.AnggaranUrusan, {
      foreignKey: "kode_sub_anggaran",
      targetKey: "kode_sub_anggaran",
    });
  };
  return SubkegiatanAnggaran;
};
