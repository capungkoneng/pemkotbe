module.exports = (sequelize, DataTypes) => {
  const rincianpsppd = sequelize.define(
    "rincianpsppd",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      psppd: {
        type: DataTypes.UUID,
      },
      kode_rek: {
        type: DataTypes.STRING,
      },
      keterangan: {
        type: DataTypes.TEXT,
      },
      satuan: {
        type: DataTypes.STRING,
      },
      vol: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      satuan: {
        type: DataTypes.STRING,
      },
      biaya: {
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
      tableName: "rincianpsppd",
      timestamp: true,
      paranoid: true,
    }
  );
  rincianpsppd.associate = (models) => {
    rincianpsppd.belongsTo(models.psppd, {
      foreignKey: "id",
      targetKey: "psppd",
    });
  };
  return rincianpsppd;
};
