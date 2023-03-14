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
/****************************AUTH********************************* */

router.post("/signup", authController.registerNewUsers);
router.post("/signin", authController.loginUsers);
router.delete(
  "/signout",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
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
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  pegawaiController.getAllPegawai
);
router.get(
  "/pegawaikepala",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  pegawaiController.getAllPegawaiKepala
);
router.get(
  "/pegawaikepalaB",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  pegawaiController.getAllPegawaiKepalaBidang
);
router.post(
  "/pegawai",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  pegawaiController.addPegawai
);
router.put(
  "/pegawai/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  pegawaiController.updatePegawai
);
router.delete(
  "/pegawai/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  pegawaiController.deletePegawai
);
router.get(
  "/pegawai/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  pegawaiController.getOnePegawai
);
router.get(
  "/alljabat/:jabatan",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  pegawaiController.getAllPegawaiJabatan
);

/***************************PEGAWAI********************************* */

/***************************KEGIATAN********************************* */

router.get(
  "/kegiatan",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  kegiatanController.getAllKegiatan
);
router.post(
  "/kegiatan",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  upload.single("upload"),
  kegiatanController.addKegiatan
);
router.post(
  "/kegiatan/namapeg",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  kegiatanController.addKegiatanNamaPeg
);
router.put(
  "/kegiatan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  kegiatanController.updateKegiatan
);
router.delete(
  "/kegiatan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  kegiatanController.deleteKegiatan
);
router.get(
  "/kegiatan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  kegiatanController.getOneKegiatan
);
router.get(
  "/kegiatanNamaPeg/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  kegiatanController.getOneKegiatanNamaPeg
);
router.get(
  "/kegiatanbystat",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  kegiatanController.getAllKegiatanByStat
);

/***************************KEGIATAN********************************* */

/***************************BHSPPD********************************* */

router.get(
  "/bhsppd",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayahsppdController.getAllBiayaHsppd
);
router.post(
  "/bhsppd",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayahsppdController.addBiayaHsppd
);
router.put(
  "/bhsppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayahsppdController.updateBiayaHsppd
);
router.delete(
  "/bhsppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayahsppdController.deleteBiayaHsppd
);
router.get(
  "/bhsppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayahsppdController.getOneBiayaHsppd
);

/***************************BHSPPD********************************* */

/***************************BPSPPD********************************* */

router.get(
  "/bpsppd",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayapengController.getAllBiayaPeng
);
router.post(
  "/bpsppd",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayapengController.addBiayaPeng
);
router.put(
  "/bpsppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayapengController.updateBiayaPeng
);
router.delete(
  "/bpsppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayapengController.deleteBiayaPeng
);
router.get(
  "/bpsppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayapengController.getOneBiayaPeng
);

/***************************BHSPPD********************************* */

/***************************BRLK********************************* */

router.get(
  "/brlk",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayarapatController.getAllBiayaRapat
);
router.post(
  "/brlk",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayarapatController.addBiayaRapat
);
router.put(
  "/brlk/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayarapatController.updateBiayaRapat
);
router.delete(
  "/brlk/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayarapatController.deleteBiayaRapat
);
router.get(
  "/brlk/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayarapatController.getOneBiayaRapat
);

/***************************BRLK********************************* */

/***************************BSKENDARAAN********************************* */

router.get(
  "/bskendaraan",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayasewaController.getAllBiayaSewa
);
router.post(
  "/bskendaraan",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayasewaController.addBiayaSewa
);
router.put(
  "/bskendaraan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayasewaController.updateBiayaSewa
);
router.delete(
  "/bskendaraan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayasewaController.deleteBiayaSewa
);
router.get(
  "/bskendaraan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayasewaController.getOneBiayaSewa
);

/***************************BSKENDARAAN********************************* */

/***************************BRSPPD********************************* */

router.get(
  "/brsppd",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayarepController.getAllBiayaRep
);
router.post(
  "/brsppd",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayarepController.addBiayaRep
);
router.put(
  "/brsppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayarepController.updateBiayaRep
);
router.delete(
  "/brsppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayarepController.deleteBiayaRep
);
router.get(
  "/brsppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  biayarepController.getOneBiayaRep
);

/***************************BRSPPD********************************* */

/***************************SPD********************************* */

router.get(
  "/spd",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  spdController.getAllSpd
);
router.post(
  "/spd",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  spdController.addSpd
);
router.put(
  "/spd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  spdController.updateSpd
);
router.delete(
  "/spd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  spdController.deleteSpd
);
router.get(
  "/spd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  spdController.getOneSpd
);

/***************************SPD********************************* */

/***************************SPT********************************* */

router.get(
  "/spt",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  sptController.getAllSpt
);
router.post(
  "/spt",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  sptController.addSpt
);
router.put(
  "/spt/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  sptController.updateSpt
);
router.delete(
  "/spt/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  sptController.deleteSpt
);
router.get(
  "/spt/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  sptController.getOneSpt
);

/***************************SPT********************************* */

/***************************PSPPD********************************* */

router.get(
  "/psppd",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  pertanggungController.getAllPsppd
);
router.post(
  "/psppd",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  pertanggungController.addPsppd
);
router.put(
  "/psppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  pertanggungController.updatePsppd
);
router.delete(
  "/psppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  pertanggungController.deletePsppd
);
router.get(
  "/psppd/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  pertanggungController.getOnePsppd
);

/***************************PSPPD********************************* */

/***************************KWITANSI********************************* */

router.get(
  "/kwitansi",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  kwitansiController.getAllKwitansi
);
router.post(
  "/kwitansi",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  kwitansiController.addKwintasi
);
router.put(
  "/kwitansi/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  kwitansiController.updateKwintasi
);
router.delete(
  "/kwitansi/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  kwitansiController.deleteKwintasi
);
router.get(
  "/kwitansi/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  kwitansiController.getOneKwintasi
);

/***************************KWITANSI********************************* */

/***************************NP2D********************************* */

router.get(
  "/np2d",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  np2dController.getAllNp2d
);
router.post(
  "/np2d",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  np2dController.addNp2d
);
router.put(
  "/np2d/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  np2dController.updateNp2d
);
router.delete(
  "/np2d/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  np2dController.deleteNp2d
);
router.get(
  "/np2d/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  np2dController.getOneNp2d
);

/***************************NP2D********************************* */

/***************************SP2D********************************* */

router.get(
  "/sp2d",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  sp2dController.getAllSp2d
);
router.post(
  "/sp2d",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  sp2dController.addSp2d
);
router.put(
  "/sp2d/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  sp2dController.updateSp2d
);
router.delete(
  "/sp2d/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  sp2dController.deleteSp2d
);
router.get(
  "/sp2d/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  sp2dController.getOneSp2d
);

/***************************SP2D********************************* */

/***************************PROVINSI********************************* */

router.get("/provinsi", provinsiController.getAllProv);

/***************************PROVINSI********************************* */

/***************************JABATAN********************************* */

router.get(
  "/jabatan",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  jabatanController.getAllJab
);

router.get(
  "/jabatanAll",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  jabatanController.getAllPageJabatan
);

router.post(
  "/jabatan",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  jabatanController.addJabatan
);
router.put(
  "/jabatan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  jabatanController.updateJabatan
);
router.delete(
  "/jabatan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  jabatanController.deleteJabatan
);

/***************************JABATAN********************************* */

/***************************GOLONGAN********************************* */

router.get(
  "/golongan",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  golonganController.getAllGol
);
router.get(
  "/golonganAll",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  golonganController.getAllPageGol
);

router.post(
  "/golongan",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  golonganController.addGol
);
router.put(
  "/golongan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  golonganController.updateGol
);
router.delete(
  "/golongan/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  golonganController.deleteGol
);

/***************************GOLONGAN********************************* */

/***************************PANGKAT********************************* */

router.get(
  "/pangkat",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  pangkatController.getAllPang
);

router.get(
  "/pangkatAll",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  pangkatController.getAllPagePang
);

router.post(
  "/pangkat",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  pangkatController.addPang
);
router.put(
  "/pangkat/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  pangkatController.updatePang
);
router.delete(
  "/pangkat/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  pangkatController.deletePang
);

/***************************PANGKAT********************************* */

/***************************KOTA********************************* */

router.get("/kota", kotaController.getAllKota);

/***************************KOTA********************************* */

/***************************BERKENDARA********************************* */

router.get(
  "/berkendara",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  berkendaraController.getAllBerkendara
);
router.get(
  "/berkendaraAll",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  berkendaraController.getAllPageBerkendara
);
router.post(
  "/berkendara",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  berkendaraController.addJBerkendara
);
router.put(
  "/berkendara/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  berkendaraController.updateBerkendara
);
router.delete(
  "/berkendara/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  berkendaraController.deleteBerkendara
);

/***************************BERKENDARA********************************* */

/***************************BIDANG********************************* */

router.get(
  "/bidang",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  bidangController.getAllBidang
);
router.get(
  "/bidangAll",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  bidangController.getAllPageBidang
);
router.post(
  "/bidang",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  bidangController.addBidang
);
router.put(
  "/bidang/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  bidangController.updateBidang
);
router.delete(
  "/bidang/:id",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  bidangController.deleteBidang
);

/***************************BIDANG********************************* */

/***************************ProfilLaporan********************************* */

router.get(
  "/laporanPro",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  laporanProfileController.getAllLaporanPro
);
router.post(
  "/laporanPro",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  upload.single("logo"),
  laporanProfileController.addLaporanPro
);

/***************************ProfilLaporan********************************* */

/***************************Urusan********************************* */

router.get("/urusan", urusanController.getAllUrusan);
router.get("/urusanone/:id", urusanController.getUrusanOne);
router.post("/urusan", urusanController.addUrusan);
router.put("/urusan/:id", urusanController.updateUrusan);
router.delete("/urusan/:id", urusanController.deleteUrusan);
router.get("/urusanAll", urusanController.getAllPageUrusan);

/***************************Urusan********************************* */

/***************************Unit********************************* */

router.get("/unit", unitOrController.getAllUnitOr);
router.get("/unitby", unitOrController.getAllUnitby);
router.post("/unit", unitOrController.addUnit);
router.put("/unit/:id", unitOrController.updateUnit);
router.delete("/unit/:id", unitOrController.deleteUnit);
router.get("/unitAll", unitOrController.getAllPageUnitOr);

/***************************Unit********************************* */

/***************************SubUnit********************************* */

router.get("/subunit", subUnitOrController.getAllSubUnit);
router.get("/subunitby", subUnitOrController.getAllSubUnitby);
router.post("/subunit", subUnitOrController.addSubUnit);
router.put("/subunit/:id", subUnitOrController.updateSubUnit);
router.delete("/subunit/:id", subUnitOrController.deleteSubUnit);
router.get("/subunitAll", subUnitOrController.getAllPageSubUnit);

/***************************SubUnit********************************* */

/***************************Program********************************* */

router.get("/program", programController.getAllProgram);
router.post("/program", programController.addProgram);
router.get("/programby", programController.getAllProgramby);
router.put("/program/:id", programController.updateProgram);
router.delete("/program/:id", programController.deleteProgram);
router.get("/programAll", programController.getAllPageProgram);

/***************************Program********************************* */

/***************************KegAng********************************* */

router.get("/kegang", kegiatanAnggaranController.getAllkegAng);
router.get("/kegangby", kegiatanAnggaranController.getAllKegAngby);
router.post("/kegang", kegiatanAnggaranController.addKegAng);
router.put("/kegang/:id", kegiatanAnggaranController.updateKegAng);
router.delete("/kegang/:id", kegiatanAnggaranController.deleteKegAng);
router.get("/kegangAll", kegiatanAnggaranController.getAllPageKegAng);

/***************************KegAng********************************* */

/***************************SubKegAng********************************* */

router.get("/subkegang", subKegiatanAnggaranController.getAllSubkegAng);
router.get("/subkegangby", subKegiatanAnggaranController.getAllSubKegAngby);
router.post("/subkegang", subKegiatanAnggaranController.addSubKegAng);
router.put("/subkegang/:id", subKegiatanAnggaranController.updateSubKegAng);
router.delete("/subkegang/:id", subKegiatanAnggaranController.deleteSubKegAng);
router.get("/subkegangAll", subKegiatanAnggaranController.getAllPageSubKegAng);

/***************************SubKegAng********************************* */

/***************************SumberPen********************************* */

router.get("/sumberpen", sumberPenController.getAllSuPen);
router.get("/sumberpenby", sumberPenController.getAllSumberPenby);
router.post("/sumberpen", sumberPenController.addSuPen);
router.put("/sumberpen/:id", sumberPenController.updateSuPen);
router.delete("/sumberpen/:id", sumberPenController.deleteSuPen);
router.get("/sumberpenAll", sumberPenController.getAllPageSuPen);

/***************************SumberPen********************************* */

/***************************JumPen********************************* */

router.get("/jumpen", jumPenController.getAllJumPen);
router.get("/jumpenby", jumPenController.getAllJumPenby);
router.post("/jumpen", jumPenController.addJumPen);
router.put("/jumpen/:id", jumPenController.updateJumPen);
router.delete("/jumpen/:id", jumPenController.deleteJumPen);
router.get("/jumpenAll", jumPenController.getAllPageJumPen);

/***************************JumPen********************************* */

/***************************AnggaranUrusan********************************* */

router.post("/angur", AnggaranUrusanController.addAnggaranUrusan);
router.put("/angur/:id", AnggaranUrusanController.updateAnggaranUrusan);
router.delete("/angur/:id", AnggaranUrusanController.deleteAnggaranUrusan);
router.get("/angurAll", AnggaranUrusanController.getAllPageAnggaranUrusan);

/***************************RekeningAnggaranMaster********************************* */

router.get("/masterrek", masterRekeningAnggaranController.getAllMasterRekAng);
router.post("/masterrek", masterRekeningAnggaranController.addMasterAng);
router.put("/masterrek/:id", masterRekeningAnggaranController.updateMasterAng);
router.delete(
  "/masterrek/:id",
  masterRekeningAnggaranController.deleteMasterAng
);
router.get(
  "/masterrekAll",
  masterRekeningAnggaranController.getAllPageMasterAng
);

/***************************RekeningAnggaranMaster********************************* */

/***************************RekeningAnggaranUrusan********************************* */

router.get("/rek", rekAnggaranController.getAllRekAng);
router.post("/rek", rekAnggaranController.addRekAng);
router.put("/rek/:id", rekAnggaranController.updateRekAng);
router.delete("/rek/:id", rekAnggaranController.deleteRekAng);
router.get("/rekAll", rekAnggaranController.getAllPageRekAng);
router.get("/rekdetail", rekAnggaranController.addDetailRekAng);

/***************************RekeningAnggaranUrusan********************************* */

module.exports = router;
