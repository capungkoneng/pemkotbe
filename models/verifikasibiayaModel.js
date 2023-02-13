module.exports = (sequelize, DataTypes) => {
  const vdbsppd = sequelize.define(
    "vdbsppd",
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
      tableName: "vdbsppd",
    }
  );
  vdbsppd.associate = (models) => {
    vdbsppd.belongsTo(models.psppd, {
      foreignKey: "id",
      sourceKey: "psppd_id",
      as: "vdbsppd"
    });
  };
  return vdbsppd;
};
