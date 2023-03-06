module.exports = (sequelize, DataTypes) => {
  const program = sequelize.define(
    "program",
    {
      prog_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      kode_program: {
        type: DataTypes.STRING,
        unique: true,
      },
      nama_program: {
        type: DataTypes.TEXT,
      },
      kode_urusan: {
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
      tableName: "program",
      timestamp: true,
      paranoid: true,
    }
  );
  program.associate = (models) => {
    program.belongsTo(models.urusan, {
      foreignKey: "kode_urusan",
      targetKey: "kode_urusan",
    });
    program.hasMany(models.kegiatanAnggaran, {
      foreignKey: "kode_program",
      sourceKey: "kode_program",
    });
    program.belongsTo(models.AnggaranUrusan, {
      foreignKey: "kode_program",
      targetKey: "kode_program",
    });
  };
  return program;
};
