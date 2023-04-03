module.exports = (sequelize, DataTypes) => {
  const sp2d = sequelize.define(
    "sp2d",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      no_sp2d: {
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
      tableName: "sp2d",
      timestamp: true,
      paranoid: true,
    }
  );
  sp2d.associate = (models) => {
    sp2d.hasOne(models.psppd, {
      foreignKey: "id",
      sourceKey: "psppd_id",
    });
  };
  return sp2d;
};
