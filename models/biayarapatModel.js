module.exports = (sequelize, DataTypes) => {
  const brlk = sequelize.define(
    "brlk",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      provinsi: {
        type: DataTypes.STRING,
      },
      satuan: {
        type: DataTypes.STRING,
      },
      fullboard_luarkota: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      fullboard_dalemkota: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      fullday: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
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
      tableName: "brlk",
      timestamp: true,
      paranoid: true,
    }
  );

  return brlk;
};
