module.exports = (sequelize, DataTypes) => {
    const berkendara = sequelize.define(
      "berkendara",
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
        tableName: "berkendara",
      }
    );
    return berkendara;
  };
  