module.exports = (sequelize, DataTypes) => {
  const psppd = sequelize.define(
    "psppd",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      no_spd: {
        type: DataTypes.STRING,
      },
      nik: {
        type: DataTypes.STRING,
      },
      nama: {
        type: DataTypes.STRING,
      },
      no_spt: {
        type: DataTypes.STRING,
      },
      tgl_berangkat: {
        type: DataTypes.DATE,
      },
      tgl_mulai: {
        type: DataTypes.DATE,
      },
      tgl_pulang: {
        type: DataTypes.DATE,
      },
      tujuan: {
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
      tableName: "psppd",
      timestamp: true,
      paranoid: true,
    }
  );
  psppd.associate = (models) => {
    psppd.hasMany(models.docppsppd, {
      foreignKey: "psppd_id",
      sourceKey: "id",
      as: "docppsppd",
    });
    psppd.hasMany(models.vd, {
      foreignKey: "psppd_id",
      sourceKey: "id",
      as: "veri",
    });
    psppd.hasMany(models.rincianpsppd, {
      foreignKey: "psppd_id",
      sourceKey: "id",
      as: "rincianpsppd",
    });
    psppd.hasOne(models.spd, {
      foreignKey: "no_spd",
      sourceKey: "no_spd",
    });
    psppd.hasOne(models.spt, {
      foreignKey: "no_spt",
      sourceKey: "no_spt",
    });
    psppd.belongsTo(models.pegawai, {
      foreignKey: "nik",
    });
    psppd.hasOne(models.pegawai, {
      foreignKey: "nip",
      sourceKey: "nik",
    });
    psppd.belongsTo(models.kwitansi, {
      foreignKey: "id",
    });
    psppd.belongsTo(models.np2d, {
      foreignKey: "id",
    });
    psppd.belongsTo(models.sp2d, {
      foreignKey: "id",
    });
  };
  return psppd;
};
