module.exports = (sequelize, DataTypes) => {
  const bpsppd = sequelize.define(
    "bpsppd",
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
      peselon1: {
        type: DataTypes.BIGINT,
      },
      peselon2: {
        type: DataTypes.BIGINT,
      },
      g3eselon3: {
        type: DataTypes.BIGINT,
      },
      g4eselon4: {
        type: DataTypes.BIGINT,
      },
      g2eselon1: {
        type: DataTypes.BIGINT,
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
      tableName: "bpsppd",
      timestamp: true,
      paranoid: true,
    }
  );

  return bpsppd;
};
