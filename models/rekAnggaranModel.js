module.exports = (sequelize, DataTypes) => {
  const rekAnggaran = sequelize.define(
    "rekAnggaran",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      kode: {
        type: DataTypes.STRING,
      },
      keperluan: {
        type: DataTypes.TEXT,
      },
      total: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
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
      tableName: "rekAnggaran",
      timestamp: true,
      paranoid: true,
    }
  );
  rekAnggaran.associate = (models) => {
    rekAnggaran.hasOne(models.rekeningAng, {
      foreignKey: "kode",
      sourceKey: "kode",
    });
    rekAnggaran.hasOne(models.urusan, {
      foreignKey: "kode_urusan",
      sourceKey: "kode_urusan",
    });
    rekAnggaran.belongsTo(models.urusan, {
      foreignKey: "kode_urusan",
      targetKey: "kode_urusan",
    });
    rekAnggaran.hasMany(models.detailRekAnggaran, {
      foreignKey: "rek_id",
      sourceKey: "id",
    });
  };
  return rekAnggaran;
};
