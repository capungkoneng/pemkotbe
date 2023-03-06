module.exports = (sequelize, DataTypes) => {
  const brsppd = sequelize.define(
    "brsppd",
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
      satuan: {
        type: DataTypes.STRING,
      },
      luar_kota: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      dalam_kota: {
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
      tableName: "brsppd",
      timestamp: true,
      paranoid: true,
    }
  );

  return brsppd;
};
