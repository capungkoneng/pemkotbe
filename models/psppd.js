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
        unique: true,
      },
      nik: {
        type: DataTypes.STRING,
        unique: true,
      },
      nama: {
        type: DataTypes.STRING,
      },
      no_spt: {
        type: DataTypes.STRING,
        unique: true,
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
    },
    {
      tableName: "psppd",
    }
  );
  psppd.associate = (models) => {
    psppd.hasMany(models.vdsppd, {
      foreignKey: "psppd_id",
      as: "vdsppd"
    });
    psppd.hasMany(models.vdbsppd, {
      foreignKey: "psppd_id",
      as: "vdbsppd"
    });
  };
  return psppd;
};
