module.exports = (sequelize, DataTypes) => {
  const profilLaporan = sequelize.define(
    "profilLaporan",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nama_pemerintah: {
        type: DataTypes.STRING,
      },
      nama_kantor: {
        type: DataTypes.STRING,
      },
      alamat: {
        type: DataTypes.STRING,
      },
      telp: {
        type: DataTypes.STRING,
      },
      website: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      kodepos: {
        type: DataTypes.STRING,
      },
      kota: {
        type: DataTypes.STRING,
      },
      provinsi: {
        type: DataTypes.STRING,
      },
      logo: {
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
      tableName: "profilLaporan",
    }
  );
  return profilLaporan;
};
