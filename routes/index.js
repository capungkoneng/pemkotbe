const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const upload = require("../config/cloudinary");

const authController = require("../controllers/authController");
const pegawaiController = require("../controllers/pegawaiController");
const kegiatanController = require("../controllers/kegiatanController");
const biayahsppdController = require("../controllers/biayahsppdController");
const biayapengController = require("../controllers/biayapengController");
const biayarapatController = require("../controllers/biayarapatController");
const biayasewaController = require("../controllers/biayasewaController");
const biayarepController = require("../controllers/biayarepController");
const spdController = require("../controllers/spdController");
const sptController = require("../controllers/sptController");
const pertanggungController = require("../controllers/pertanggungjwbController");
const kwitansiController = require("../controllers/kwitansiController");
const provinsiController = require("../controllers/provinsiController");
const jabatanController = require("../controllers/jabatanController");
const pangkatController = require("../controllers/pangkatController");
const golonganController = require("../controllers/golonganController");
const kotaController = require("../controllers/kotaController");
const berkendaraController = require("../controllers/berkendara");
const np2dController = require("../controllers/np2dController");
const sp2dController = require("../controllers/sp2dController");
const bidangController = require("../controllers/bidangController");
const laporanProfileController = require("../controllers/profilLaporanController");
const urusanController = require("../controllers/urusanController");
const unitOrController = require("../controllers/unitOrController");
const subUnitOrController = require("../controllers/subUnitController");
const programController = require("../controllers/programController");
const kegiatanAnggaranController = require("../controllers/kegiatanAnggaranController");
const subKegiatanAnggaranController = require("../controllers/subKegAnggaranController");
const sumberPenController = require("../controllers/sumberPenController");
const jumPenController = require("../controllers/jumPenController");
const AnggaranUrusanController = require("../controllers/anggaranUrusanController");
const masterRekeningAnggaranController = require("../controllers/masterRekeningAngController");
const rekAnggaranController = require("../controllers/rekAnggaranController");
const userController = require("../controllers/userController");
const rekapLaporanController = require("../controllers/rekapLaporanController");
/****************************AUTH********************************* */

router.post("/signup", authController.registerNewUsers);
router.post("/signin", authController.loginUsers);
router.delete(
  "/signout",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  authController.logoutUsers
);
/***************************AUTH********************************* */

/****************************USER********************************* */

router.post("/changepass", userController.updateUser);
router.post("/forgotpass", userController.forgotPass);
router.post("/changepassbyid", userController.changePassById);

/***************************USER********************************* */

/***************************PEGAWAI********************************* */

router.get(
  "/pegawai",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pegawaiController.getAllPegawai
);
router.get(
  "/pegawaikepala",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pegawaiController.getAllPegawaiKepala
);
router.get(
  "/pegawaikepalaB",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pegawaiController.getAllPegawaiKepalaBidang
);
router.get(
  "/pegawaikuasa",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pegawaiController.getAllPegawaiKuasaAnggaran
);
router.get(
  "/pegawaipejabatpelaksana",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pegawaiController.getAllPegawaiPejabatTeknis
);
router.get(
  "/pegawaiskpd",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pegawaiController.getAllPegawaiPejabatPenataSkkpd
);
router.get(
  "/pegawaibendahara",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pegawaiController.getAllPegawaiBendahara
);
router.post(
  "/pegawai",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pegawaiController.addPegawai
);
router.put(
  "/pegawai/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pegawaiController.updatePegawai
);
router.delete(
  "/pegawai/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pegawaiController.deletePegawai
);
router.get(
  "/pegawai/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pegawaiController.getOnePegawai
);
router.get(
  "/alljabat/:jabatan",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pegawaiController.getAllPegawaiJabatan
);

/***************************PEGAWAI********************************* */

/***************************KEGIATAN********************************* */

router.get(
  "/kegiatan",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  kegiatanController.getAllKegiatan
);
router.post(
  "/kegiatan",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  upload.single("upload"),
  kegiatanController.addKegiatan
);
router.post(
  "/kegiatan/namapeg",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  kegiatanController.addKegiatanNamaPeg
);
router.put(
  "/kegiatan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  kegiatanController.updateKegiatan
);
router.delete(
  "/kegiatan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  kegiatanController.deleteKegiatan
);
router.get(
  "/kegiatan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  kegiatanController.getOneKegiatan
);
router.get(
  "/kegiatanNamaPeg/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  kegiatanController.getOneKegiatanNamaPeg
);
router.get(
  "/kegiatanbystat",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  kegiatanController.getAllKegiatanByStat
);

/***************************KEGIATAN********************************* */

/***************************BHSPPD********************************* */

router.get(
  "/bhsppd",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayahsppdController.getAllBiayaHsppd
);
router.post(
  "/bhsppd",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayahsppdController.addBiayaHsppd
);
router.put(
  "/bhsppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayahsppdController.updateBiayaHsppd
);
router.delete(
  "/bhsppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayahsppdController.deleteBiayaHsppd
);
router.get(
  "/bhsppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayahsppdController.getOneBiayaHsppd
);

/***************************BHSPPD********************************* */

/***************************BPSPPD********************************* */

router.get(
  "/bpsppd",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayapengController.getAllBiayaPeng
);
router.post(
  "/bpsppd",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayapengController.addBiayaPeng
);
router.put(
  "/bpsppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayapengController.updateBiayaPeng
);
router.delete(
  "/bpsppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayapengController.deleteBiayaPeng
);
router.get(
  "/bpsppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayapengController.getOneBiayaPeng
);

/***************************BHSPPD********************************* */

/***************************BRLK********************************* */

router.get(
  "/brlk",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayarapatController.getAllBiayaRapat
);
router.post(
  "/brlk",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayarapatController.addBiayaRapat
);
router.put(
  "/brlk/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayarapatController.updateBiayaRapat
);
router.delete(
  "/brlk/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayarapatController.deleteBiayaRapat
);
router.get(
  "/brlk/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayarapatController.getOneBiayaRapat
);

/***************************BRLK********************************* */

/***************************BSKENDARAAN********************************* */

router.get(
  "/bskendaraan",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayasewaController.getAllBiayaSewa
);
router.post(
  "/bskendaraan",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayasewaController.addBiayaSewa
);
router.put(
  "/bskendaraan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayasewaController.updateBiayaSewa
);
router.delete(
  "/bskendaraan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayasewaController.deleteBiayaSewa
);
router.get(
  "/bskendaraan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayasewaController.getOneBiayaSewa
);

/***************************BSKENDARAAN********************************* */

/***************************BRSPPD********************************* */

router.get(
  "/brsppd",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayarepController.getAllBiayaRep
);
router.post(
  "/brsppd",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayarepController.addBiayaRep
);
router.put(
  "/brsppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayarepController.updateBiayaRep
);
router.delete(
  "/brsppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayarepController.deleteBiayaRep
);
router.get(
  "/brsppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  biayarepController.getOneBiayaRep
);

/***************************BRSPPD********************************* */

/***************************SPD********************************* */

router.get(
  "/spd",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  spdController.getAllSpd
);
router.post(
  "/spd",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  spdController.addSpd
);
router.put(
  "/spd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  spdController.updateSpd
);
router.delete(
  "/spd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  spdController.deleteSpd
);
router.get(
  "/spd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  spdController.getOneSpd
);

/***************************SPD********************************* */

/***************************SPT********************************* */

router.get(
  "/spt",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  sptController.getAllSpt
);
router.post(
  "/spt",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  sptController.addSpt
);
router.put(
  "/spt/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  sptController.updateSpt
);
router.delete(
  "/spt/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  sptController.deleteSpt
);
router.get(
  "/spt/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  sptController.getOneSpt
);
router.get(
  "/sptbyuser/:nip",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  sptController.getSptByuser
);

/***************************SPT********************************* */

/***************************PSPPD********************************* */

router.get(
  "/psppd",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pertanggungController.getAllPsppd
);
router.get(
  "/kwitansiRincian",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pertanggungController.getAllKwitansiRincian
);
router.post(
  "/psppd",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  upload.array("upload", 1000),
  pertanggungController.addPsppd
);

router.post(
  "/verifydoc",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pertanggungController.veriDoc
);

router.put(
  "/psppdverify",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pertanggungController.updatePsppd
);
router.delete(
  "/psppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pertanggungController.deletePsppd
);
router.get(
  "/psppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pertanggungController.getOnePsppd
);

router.get(
  "/psppdbynik/:nik",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pertanggungController.getAllPsppdByNik
);
/***************************PSPPD********************************* */

/***************************KWITANSI********************************* */

router.get(
  "/kwitansi",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  kwitansiController.getAllKwitansi
);
router.post(
  "/kwitansi",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  kwitansiController.addKwintasi
);
router.put(
  "/kwitansi/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  kwitansiController.updateKwintasi
);
router.delete(
  "/kwitansi/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  kwitansiController.deleteKwintasi
);
router.get(
  "/kwitansi/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  kwitansiController.getOneKwintasi
);

/***************************KWITANSI********************************* */

/***************************NP2D********************************* */

router.get(
  "/np2d",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  np2dController.getAllNp2d
);
router.post(
  "/np2d",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  np2dController.addNp2d
);
router.put(
  "/np2d/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  np2dController.updateNp2d
);
router.delete(
  "/np2d/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  np2dController.deleteNp2d
);
router.get(
  "/np2d/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  np2dController.getOneNp2d
);

/***************************NP2D********************************* */

/***************************SP2D********************************* */

router.get(
  "/sp2d",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  sp2dController.getAllSp2d
);
router.post(
  "/sp2d",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  sp2dController.addSp2d
);
router.put(
  "/sp2d/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  sp2dController.updateSp2d
);
router.delete(
  "/sp2d/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  sp2dController.deleteSp2d
);
router.get(
  "/sp2d/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  sp2dController.getOneSp2d
);

/***************************SP2D********************************* */

/***************************PROVINSI********************************* */

router.get("/provinsi", provinsiController.getAllProv);

/***************************PROVINSI********************************* */

/***************************JABATAN********************************* */

router.get(
  "/jabatan",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  jabatanController.getAllJab
);

router.get(
  "/jabatanAll",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  jabatanController.getAllPageJabatan
);

router.post(
  "/jabatan",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  jabatanController.addJabatan
);
router.put(
  "/jabatan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  jabatanController.updateJabatan
);
router.delete(
  "/jabatan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  jabatanController.deleteJabatan
);

/***************************JABATAN********************************* */

/***************************GOLONGAN********************************* */

router.get(
  "/golongan",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  golonganController.getAllGol
);
router.get(
  "/golonganAll",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  golonganController.getAllPageGol
);

router.post(
  "/golongan",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  golonganController.addGol
);
router.put(
  "/golongan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  golonganController.updateGol
);
router.delete(
  "/golongan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  golonganController.deleteGol
);

/***************************GOLONGAN********************************* */

/***************************PANGKAT********************************* */

router.get(
  "/pangkat",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pangkatController.getAllPang
);

router.get(
  "/pangkatAll",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pangkatController.getAllPagePang
);

router.post(
  "/pangkat",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pangkatController.addPang
);
router.put(
  "/pangkat/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pangkatController.updatePang
);
router.delete(
  "/pangkat/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  pangkatController.deletePang
);

/***************************PANGKAT********************************* */

/***************************KOTA********************************* */

router.get("/kota", kotaController.getAllKota);

/***************************KOTA********************************* */

/***************************BERKENDARA********************************* */

router.get(
  "/berkendara",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  berkendaraController.getAllBerkendara
);
router.get(
  "/berkendaraAll",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  berkendaraController.getAllPageBerkendara
);
router.post(
  "/berkendara",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  berkendaraController.addJBerkendara
);
router.put(
  "/berkendara/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  berkendaraController.updateBerkendara
);
router.delete(
  "/berkendara/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  berkendaraController.deleteBerkendara
);

/***************************BERKENDARA********************************* */

/***************************BIDANG********************************* */

router.get(
  "/bidang",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  bidangController.getAllBidang
);
router.get(
  "/bidangAll",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  bidangController.getAllPageBidang
);
router.post(
  "/bidang",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  bidangController.addBidang
);
router.put(
  "/bidang/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  bidangController.updateBidang
);
router.delete(
  "/bidang/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  bidangController.deleteBidang
);

/***************************BIDANG********************************* */

/***************************ProfilLaporan********************************* */

router.get(
  "/laporanPro",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  laporanProfileController.getAllLaporanPro
);
router.post(
  "/laporanPro",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  upload.single("logo"),
  laporanProfileController.addLaporanPro
);

/***************************ProfilLaporan********************************* */

/***************************Urusan********************************* */

router.get(
  "/urusan",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  urusanController.getAllUrusan
);
router.get(
  "/urusanone/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  urusanController.getUrusanOne
);
router.post(
  "/urusan",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  urusanController.addUrusan
);
router.put(
  "/urusan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  urusanController.updateUrusan
);
router.delete(
  "/urusan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  urusanController.deleteUrusan
);
router.get(
  "/urusanAll",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  urusanController.getAllPageUrusan
);

/***************************Urusan********************************* */

/***************************Unit********************************* */

router.get(
  "/unit",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  unitOrController.getAllUnitOr
);
router.get(
  "/unitby",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  unitOrController.getAllUnitby
);
router.post(
  "/unit",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  unitOrController.addUnit
);
router.put(
  "/unit/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  unitOrController.updateUnit
);
router.delete(
  "/unit/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  unitOrController.deleteUnit
);
router.get(
  "/unitAll",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  unitOrController.getAllPageUnitOr
);

/***************************Unit********************************* */

/***************************SubUnit********************************* */

router.get(
  "/subunit",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  subUnitOrController.getAllSubUnit
);
router.get(
  "/subunitby",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  subUnitOrController.getAllSubUnitby
);
router.post(
  "/subunit",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  subUnitOrController.addSubUnit
);
router.put(
  "/subunit/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  subUnitOrController.updateSubUnit
);
router.delete(
  "/subunit/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  subUnitOrController.deleteSubUnit
);
router.get("/subunitAll", subUnitOrController.getAllPageSubUnit);

/***************************SubUnit********************************* */

/***************************Program********************************* */

router.get(
  "/program",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  programController.getAllProgram
);
router.post(
  "/program",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  programController.addProgram
);
router.get(
  "/programby",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  programController.getAllProgramby
);
router.put(
  "/program/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  programController.updateProgram
);
router.delete(
  "/program/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  programController.deleteProgram
);
router.get(
  "/programAll",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  programController.getAllPageProgram
);

/***************************Program********************************* */

/***************************KegAng********************************* */

router.get(
  "/kegang",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  kegiatanAnggaranController.getAllkegAng
);
router.get(
  "/kegangby",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  kegiatanAnggaranController.getAllKegAngby
);
router.post(
  "/kegang",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  kegiatanAnggaranController.addKegAng
);
router.put(
  "/kegang/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  kegiatanAnggaranController.updateKegAng
);
router.delete(
  "/kegang/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  kegiatanAnggaranController.deleteKegAng
);
router.get(
  "/kegangAll",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  kegiatanAnggaranController.getAllPageKegAng
);

/***************************KegAng********************************* */

/***************************SubKegAng********************************* */

router.get(
  "/subkegang",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  subKegiatanAnggaranController.getAllSubkegAng
);
router.get(
  "/subkegangby",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  subKegiatanAnggaranController.getAllSubKegAngby
);
router.post(
  "/subkegang",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  subKegiatanAnggaranController.addSubKegAng
);
router.put(
  "/subkegang/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  subKegiatanAnggaranController.updateSubKegAng
);
router.delete(
  "/subkegang/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  subKegiatanAnggaranController.deleteSubKegAng
);
router.get(
  "/subkegangAll",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  subKegiatanAnggaranController.getAllPageSubKegAng
);

/***************************SubKegAng********************************* */

/***************************SumberPen********************************* */

router.get(
  "/sumberpen",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  sumberPenController.getAllSuPen
);
router.get(
  "/sumberpenby",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  sumberPenController.getAllSumberPenby
);
router.post(
  "/sumberpen",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  sumberPenController.addSuPen
);
router.put(
  "/sumberpen/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  sumberPenController.updateSuPen
);
router.delete(
  "/sumberpen/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  sumberPenController.deleteSuPen
);
router.get(
  "/sumberpenAll",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  sumberPenController.getAllPageSuPen
);

/***************************SumberPen********************************* */

/***************************JumPen********************************* */

router.get(
  "/jumpen",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  jumPenController.getAllJumPen
);
router.get(
  "/jumpenby",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  jumPenController.getAllJumPenby
);
router.post(
  "/jumpen",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  jumPenController.addJumPen
);
router.put(
  "/jumpen/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  jumPenController.updateJumPen
);
router.delete(
  "/jumpen/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  jumPenController.deleteJumPen
);
router.get(
  "/jumpenAll",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  jumPenController.getAllPageJumPen
);

/***************************JumPen********************************* */

/***************************AnggaranUrusan********************************* */

router.post(
  "/angur",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  AnggaranUrusanController.addAnggaranUrusan
);
router.put(
  "/angur/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  AnggaranUrusanController.updateAnggaranUrusan
);
router.delete(
  "/angur/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  AnggaranUrusanController.deleteAnggaranUrusan
);
router.get(
  "/angurAll",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  AnggaranUrusanController.getAllPageAnggaranUrusan
);

/***************************RekeningAnggaranMaster********************************* */

router.get(
  "/masterrek",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  masterRekeningAnggaranController.getAllMasterRekAng
);
router.post(
  "/masterrek",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  masterRekeningAnggaranController.addMasterAng
);
router.put(
  "/masterrek/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  masterRekeningAnggaranController.updateMasterAng
);
router.delete(
  "/masterrek/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),

  masterRekeningAnggaranController.deleteMasterAng
);
router.get(
  "/masterrekAll",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),

  masterRekeningAnggaranController.getAllPageMasterAng
);

/***************************RekeningAnggaranMaster********************************* */

/***************************RekeningAnggaranUrusan********************************* */

router.get(
  "/rek",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  rekAnggaranController.getAllRekAng
);
router.post(
  "/rek",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  rekAnggaranController.addRekAng
);
router.put(
  "/rek/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  rekAnggaranController.updateRekAng
);
router.delete(
  "/rek/:id",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  rekAnggaranController.deleteRekAng
);
router.get(
  "/rekAll",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  rekAnggaranController.getAllPageRekAng
);
router.get(
  "/rekdetail",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  rekAnggaranController.addDetailRekAng
);

/***************************RekeningAnggaranUrusan********************************* */

/***************************LAPORAN********************************* */
router.get(
  "/laporanpegawai",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  rekapLaporanController.getAllPageLaporan
);

router.get(
  "/laporanpegawaianggaran",
  auth.authToken({ admin: "admin", hrd: "hrd", pegawai: "Pegawai" }),
  rekapLaporanController.getAllPageLaporanAnggaran
);

/***************************LAPORAN********************************* */

module.exports = router;
