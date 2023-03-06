module.exports = (sequelize, DataTypes) => {
  const unitOr = sequelize.define(
    "unitOr",
    {
      unit_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      kode_unit: {
        type: DataTypes.STRING,
        unique: true,
      },
      nama_unit: {
        type: DataTypes.STRING,
      },
      kode_urusan: {
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
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "unit",
      timestamp: true,
      paranoid: true,
    }
  );
  unitOr.associate = (models) => {
    unitOr.belongsTo(models.urusan, {
      foreignKey: "kode_urusan",
      targetKey: "kode_urusan",
    });
    unitOr.hasMany(models.subunit, {
      foreignKey: "kode_unit",
      sourceKey: "kode_unit",
    });
    unitOr.belongsTo(models.AnggaranUrusan, {
      foreignKey: "kode_unit",
      targetKey: "kode_unit",
    });
  };
  return unitOr;
};
