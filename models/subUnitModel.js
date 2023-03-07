module.exports = (sequelize, DataTypes) => {
  const subunit = sequelize.define(
    "subunit",
    {
      subunit_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      sub_kode_unit: {
        type: DataTypes.STRING,
        unique: true,
      },
      sub_nama_unit: {
        type: DataTypes.STRING,
      },
      kode_unit: {
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
      tableName: "subunit",
      timestamp: true,
      paranoid: true,
    }
  );
  subunit.associate = (models) => {
    subunit.belongsTo(models.unitOr, {
      foreignKey: "kode_unit",
      targetKey: "kode_unit",
    });
    subunit.belongsTo(models.AnggaranUrusan, {
      foreignKey: "sub_kode_unit",
      targetKey: "sub_kode_unit",
    });
  };
  return subunit;
};
