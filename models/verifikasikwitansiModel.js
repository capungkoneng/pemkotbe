module.exports = (sequelize, DataTypes) => {
  const vkwitansi = sequelize.define(
    "vkwitansi",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      uraian: {
        type: DataTypes.STRING,
      },
      nilai_rill: {
        type: DataTypes.STRING,
      },
      nilai_disetujui: {
        type: DataTypes.STRING,
      },
      kwitansi_id: {
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
      tableName: "vkwitansi",
    }
  );
  vkwitansi.associate = (models) => {
    vkwitansi.belongsTo(models.psppd, {
      foreignKey: "id",
      sourceKey: "kwitansi_id",
      as: "vkwitansi",
    });
  };
  return vkwitansi;
};
