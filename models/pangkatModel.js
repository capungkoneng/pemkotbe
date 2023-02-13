module.exports = (sequelize, DataTypes) => {
  const pangkat = sequelize.define(
    "pangkat",
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
      tableName: "pangkat",
    }
  );
  return pangkat;
};
