module.exports = (sequelize, DataTypes) => {
  const jumPen = sequelize.define(
    "jumPen",
    {
      jumpen_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nama: {
        type: DataTypes.STRING,
      },
      tahun: {
        type: DataTypes.STRING,
      },
      jumlah: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      sumberpen_id: {
        type: DataTypes.INTEGER,
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
      tableName: "jumPen",
      timestamp: true,
      paranoid: true,
    }
  );
  jumPen.associate = (models) => {
    jumPen.belongsTo(models.sumberPen, {
      foreignKey: "sumberpen_id",
      targetKey: "sumberpen_id",
    });
    jumPen.belongsTo(models.AnggaranUrusan, {
      foreignKey: "jumPen_id",
      targetKey: "jumPen_id",
    });
  };
  return jumPen;
};
