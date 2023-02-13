module.exports = (sequelize, DataTypes) => {
    const golongan = sequelize.define(
      "golongan",
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
        tableName: "golongan",
      }
    );
    return golongan;
  };
  