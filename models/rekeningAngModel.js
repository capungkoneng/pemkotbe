module.exports = (sequelize, DataTypes) => {
  const rekeningAng = sequelize.define(
    "rekeningAng",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      kode: {
        type: DataTypes.STRING,
        unique: true,
      },
      atas_nama: {
        type: DataTypes.STRING,
      },
      nama_bank: {
        type: DataTypes.STRING,
      },
      total: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
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
      tableName: "rekeningAng",
      timestamp: true,
      paranoid: true,
    }
  );
  rekeningAng.associate = (models) => {
    rekeningAng.belongsTo(models.rekAnggaran, {
      foreignKey: "kode",
      targetKey: "kode",
    });
    rekeningAng.belongsTo(models.rincianpsppd, {
      foreignKey: "kode",
      sourceKey: "kode",
    });
  };
  return rekeningAng;
};
