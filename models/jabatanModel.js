module.exports = (sequelize, DataTypes) => {
  const jabatan = sequelize.define(
    "jabatan",
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
      tableName: "jabatan",
    }
  );
  return jabatan;
};
