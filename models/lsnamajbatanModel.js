module.exports = (sequelize, DataTypes) => {
  const bidang = sequelize.define(
    "lsnamajbatan",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nama: {
        type: DataTypes.STRING,
      },
      nama_pegawai: {
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
      tableName: "lsnamajbatan",
    }
  );
  lsnamajbatan.associate = (models) => {
    lsnamajbatan.belongsTo(models.kegiatan, {
      foreignKey: "id",
      sourceKey: "kegiatan_id",
      as: "lsnamajbatan",
    });
  };
  return lsnamajbatan;
};
