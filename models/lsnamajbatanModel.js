module.exports = (sequelize, DataTypes) => {
  const lsnamajbatan = sequelize.define(
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
      pangkat: {
        type: DataTypes.STRING,
      },
      gol: {
        type: DataTypes.STRING,
      },
      nip: {
        type: DataTypes.STRING,
        unique: true,
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
