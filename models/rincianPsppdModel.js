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
      psppd_id: {
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
      total: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      nilai_disetujui: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      verify: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
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
      as: "rincianpsppd",
    });
    rincianpsppd.hasOne(models.rekeningAng, {
      foreignKey: "kode",
      sourceKey: "kode_rek",
    });
  };
  return rincianpsppd;
};
