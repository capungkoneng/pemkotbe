module.exports = (sequelize, DataTypes) => {
  const sp2d = sequelize.define(
    "sp2d",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      no_sp2d: {
        type: DataTypes.STRING,
        unique: true,
      },
      no_np2d: {
        type: DataTypes.STRING,
        unique: true,
      },
      nik_penerima: {
        type: DataTypes.STRING,
        unique: true,
      },
      nama_penerima: {
        type: DataTypes.STRING,
      },
      jumlah: {
        type: DataTypes.BIGINT,
      },
      tgl_np2d: {
        type: DataTypes.DATE,
      },
      tgl: {
        type: DataTypes.DATE,
      },
      nama_bank: {
        type: DataTypes.STRING,
      },
      nama_rek: {
        type: DataTypes.STRING,
      },
      no_rek: {
        type: DataTypes.STRING,
        unique: true,
      },
      tujuan: {
        type: DataTypes.STRING,
      },
      kegiatan: {
        type: DataTypes.STRING,
      },
      sub_kegiatan: {
        type: DataTypes.STRING,
      },
      kode_rek_dpa: {
        type: DataTypes.STRING,
      },
      tahun_anggaran: {
        type: DataTypes.STRING,
      },
      uraian_pembayaran: {
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
      tableName: "sp2d",
    }
  );
  return sp2d;
};
