module.exports = (sequelize, DataTypes) => {
  const pegawai = sequelize.define(
    "pegawai",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nama: {
        type: DataTypes.STRING,
      },
      nip: {
        type: DataTypes.STRING,
        unique: true,
      },
      jabatan: {
        type: DataTypes.STRING,
      },
      pangkat: {
        type: DataTypes.STRING,
      },
      gol: {
        type: DataTypes.STRING,
      },
      bidang: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      nama_bank: {
        type: DataTypes.STRING,
      },
      no_rek: {
        type: DataTypes.STRING,
        unique: true,
      },
      nama_rek: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        email: true,
        allowNull: false,
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
      tableName: "pegawai",
      timestamp: true,
      paranoid: true,
    }
  );
  pegawai.associate = (models) => {
    pegawai.hasOne(models.psppd, {
      foreignKey: "nik",
      sourceKey: "nip"
    });
  };
  return pegawai;
};
