module.exports = (sequelize, DataTypes) => {
  const docppsppd = sequelize.define(
    "docppsppd",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      upload: {
        type: DataTypes.TEXT,
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
      tableName: "docppsppd",
      timestamp: true,
      paranoid: true,
    }
  );
  docppsppd.associate = (models) => {
    docppsppd.belongsTo(models.psppd, {
      foreignKey: "id",
      as: "docppsppd",
    });
  };
  return docppsppd;
};
