module.exports = (sequelize, DataTypes) => {
  const urusan = sequelize.define(
    "urusan",
    {
      urusan_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      kode_urusan: {
        type: DataTypes.STRING,
        unique: true,
      },
      nama_urusan: {
        type: DataTypes.TEXT,
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
      tableName: "urusan",
      timestamp: true,
      paranoid: true,
    }
  );
  urusan.associate = (models) => {
    urusan.hasMany(models.unitOr, {
      foreignKey: "kode_urusan",
      sourceKey: "kode_urusan",
    });
    urusan.hasMany(models.program, {
      foreignKey: "kode_urusan",
      sourceKey: "kode_urusan",
    });
    urusan.belongsTo(models.AnggaranUrusan, {
      foreignKey: "kode_urusan",
      targetKey: "kode_urusan",
    });
    urusan.belongsTo(models.np2d, {
      foreignKey: "kode_urusan",
      targetKey: "kode_urusan",
    });
  };
  return urusan;
};
