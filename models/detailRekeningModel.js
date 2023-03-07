module.exports = (sequelize, DataTypes) => {
  const detailRekAnggaran = sequelize.define(
    "detailRekAnggaran",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      keperluan: {
        type: DataTypes.TEXT,
      },
      jumlah_peserta: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      jenis: {
        type: DataTypes.STRING,
      },
      total: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      rek_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
      tableName: "detailRekAnggaran",
      timestamp: true,
      paranoid: true,
    }
  );
  detailRekAnggaran.associate = (models) => {
    detailRekAnggaran.belongsTo(models.rekAnggaran, {
      foreignKey: "id",
    });
  };
  return detailRekAnggaran;
};
