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
      no_kwt: {
        type: DataTypes.STRING,
        unique: true,
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
    kwitansi.hasOne(models.psppd, {
      foreignKey: "id",
      sourceKey: "psppd_id"
    });
  };
  return kwitansi;
};
