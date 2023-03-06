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
        tableName: "berkendara",
      }
    );
    return berkendara;
  };
  