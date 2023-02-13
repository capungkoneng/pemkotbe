module.exports = (sequelize, DataTypes) => {
  const bskendaraan = sequelize.define(
    "bskendaraan",
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
      roda4: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      roda6_biskecil: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      roda6_bisbesar: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      taxi: {
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
      tableName: "bskendaraan",
    }
  );

  return bskendaraan;
};
