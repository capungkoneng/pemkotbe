module.exports = (sequelize, DataTypes) => {
  const np2d = sequelize.define(
    "np2d",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      no_np2d: {
        type: DataTypes.STRING,
        unique: true,
      },
      kode_urusan: {
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
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "np2d",
      timestamp: true,
      paranoid: true,
    }
  );
  np2d.associate = (models) => {
    np2d.hasOne(models.psppd, {
      foreignKey: "id",
      sourceKey: "psppd_id",
    });
    np2d.hasOne(models.urusan, {
      foreignKey: "kode_urusan",
      sourceKey: "kode_urusan",
    });
  };
  return np2d;
};
