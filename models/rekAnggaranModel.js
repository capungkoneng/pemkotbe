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
    rekAnggaran.hasOne(models.sumberPen, {
      foreignKey: "sumberpen_id",
      sourceKey: "sumberpen_id",
    });
    rekAnggaran.belongsTo(models.sumberPen, {
      foreignKey: "sumberpen_id",
      targetKey: "sumberpen_id",
    });
    rekAnggaran.hasMany(models.detailRekAnggaran, {
      foreignKey: "rek_id",
      sourceKey: "id",
    });
  };
  return rekAnggaran;
};
