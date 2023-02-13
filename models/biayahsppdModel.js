module.exports = (sequelize, DataTypes) => {
  const bhsppd = sequelize.define(
    "bhsppd",
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
      luar_kota: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      dalam_kota: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      diklat: {
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
    },
    {
      tableName: "bhsppd",
    }
  );

  return bhsppd;
};
