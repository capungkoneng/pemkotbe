module.exports = (sequelize, DataTypes) => {
  const vdsppd = sequelize.define(
    "vdsppd",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nama_dokumen: {
        type: DataTypes.STRING,
      },
      keterangan: {
        type: DataTypes.STRING,
      },
      psppd_id: {
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
      tableName: "vdsppd",
    }
  );
  vdsppd.associate = (models) => {
    vdsppd.belongsTo(models.psppd, {
      foreignKey: "id",
      sourceKey: "psppd_id",
      as: "vdsppd",
    });
  };
  return vdsppd;
};
