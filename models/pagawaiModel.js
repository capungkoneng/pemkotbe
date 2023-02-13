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
      tableName: "pegawai",
    }
  );

  return pegawai;
};
