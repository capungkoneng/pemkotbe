module.exports = (sequelize, DataTypes) => {
  const vd = sequelize.define(
    "vd",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nama_dokumen: {
        type: DataTypes.STRING,
      },
      keterangan: {
        type: DataTypes.STRING,
      },
      psppd_id: {
        type: DataTypes.UUID,
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
      tableName: "vd",
      timestamp: true,
      paranoid: true,
    }
  );
  vd.associate = (models) => {
    vd.belongsTo(models.psppd, {
      foreignKey: "id",
      as: "veri",
    });
  };
  return vd;
};
