module.exports = (sequelize, DataTypes) => {
  const kota = sequelize.define(
    "kota",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nama: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "kota",
    }
  );
  return kota;
};
