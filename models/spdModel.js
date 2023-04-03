module.exports = (sequelize, DataTypes) => {
  const spd = sequelize.define(
    "spd",
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
      nip: {
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
      tgl_selesai: {
        type: DataTypes.DATE,
      },
      kegiatan: {
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
      tableName: "spd",
      timestamp: true,
      paranoid: true,
    }
  );
  spd.associate = (models) => {
    spd.hasOne(models.spt, {
      foreignKey: "no_spt",
      sourceKey: "no_spt",
    });
    spd.belongsTo(models.psppd, {
      foreignKey: "no_spd",
      targetKey: "no_spd",
    });
  };

  return spd;
};
