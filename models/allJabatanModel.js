module.exports = (sequelize, DataTypes) => {
  const lsjabatan = sequelize.define(
    "lsjabatan",
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
      tableName: "allJabatan",
    }
  );
  lsjabatan.associate = (models) => {
    lsjabatan.belongsTo(models.kegiatan, {
      foreignKey: "id",
      sourceKey: "kegiatan_id",
      as: "lsjabatan",
    });
  };
  return lsjabatan;
};
