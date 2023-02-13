module.exports = (sequelize, DataTypes) => {
  const provinsi = sequelize.define(
    "provinsi",
    {
      prov_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      prov_name: {
        type: DataTypes.STRING,
      },
      locationid: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "provinsi",
    }
  );
  return provinsi;
};
