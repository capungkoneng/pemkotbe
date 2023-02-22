const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const upload = require("../config/cloudinary");

const statusController = require("../controllers/statusController");
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

/***************************AUTH********************************* */

router.post("/signup", authController.registerNewUsers);
router.post("/signin", authController.loginUsers);
router.delete(
  "/signout",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  authController.logoutUsers
);
/***************************AUTH********************************* */
router.get(
  "/status",
  auth.authToken({ admin: "admin", hrd: "hrd" }),
  statusController.getStatus
);

/***************************PEGAWAI********************************* */

router.get("/pegawai", pegawaiController.getAllPegawai);
router.post("/pegawai", pegawaiController.addPegawai);
router.put("/pegawai/:id", pegawaiController.updatePegawai);
router.delete("/pegawai/:id", pegawaiController.deletePegawai);
router.get("/pegawai/:id", pegawaiController.getOnePegawai);
router.get(
  "/alljabat/:jabatan",
  pegawaiController.getAllPegawaiJabatan
);

/***************************PEGAWAI********************************* */

/***************************KEGIATAN********************************* */

router.get("/kegiatan", kegiatanController.getAllKegiatan);
router.post(
  "/kegiatan",
  upload.single("upload"),
  kegiatanController.addKegiatan
);
router.post("/kegiatan/namapeg", kegiatanController.addKegiatanNamaPeg);
router.put("/kegiatan/:id", kegiatanController.updateKegiatan);
router.delete("/kegiatan/:id", kegiatanController.deleteKegiatan);
router.get("/kegiatan/:id", kegiatanController.getOneKegiatan);
router.get("/kegiatanNamaPeg/:id", kegiatanController.getOneKegiatanNamaPeg);
router.get("/kegiatanbystat", kegiatanController.getAllKegiatanByStat);



/***************************KEGIATAN********************************* */

/***************************BHSPPD********************************* */

router.get("/bhsppd", biayahsppdController.getAllBiayaHsppd);
router.post("/bhsppd", biayahsppdController.addBiayaHsppd);
router.put("/bhsppd/:id", biayahsppdController.updateBiayaHsppd);
router.delete("/bhsppd/:id", biayahsppdController.deleteBiayaHsppd);
router.get("/bhsppd/:id", biayahsppdController.getOneBiayaHsppd);

/***************************BHSPPD********************************* */

/***************************BPSPPD********************************* */

router.get("/bpsppd", biayapengController.getAllBiayaPeng);
router.post("/bpsppd", biayapengController.addBiayaPeng);
router.put("/bpsppd/:id", biayapengController.updateBiayaPeng);
router.delete("/bpsppd/:id", biayapengController.deleteBiayaPeng);
router.get("/bpsppd/:id", biayapengController.getOneBiayaPeng);

/***************************BHSPPD********************************* */

/***************************BRLK********************************* */

router.get("/brlk", biayarapatController.getAllBiayaRapat);
router.post("/brlk", biayarapatController.addBiayaRapat);
router.put("/brlk/:id", biayarapatController.updateBiayaRapat);
router.delete("/brlk/:id", biayarapatController.deleteBiayaRapat);
router.get("/brlk/:id", biayarapatController.getOneBiayaRapat);

/***************************BRLK********************************* */

/***************************BSKENDARAAN********************************* */

router.get("/bskendaraan", biayasewaController.getAllBiayaSewa);
router.post("/bskendaraan", biayasewaController.addBiayaSewa);
router.put("/bskendaraan/:id", biayasewaController.updateBiayaSewa);
router.delete("/bskendaraan/:id", biayasewaController.deleteBiayaSewa);
router.get("/bskendaraan/:id", biayasewaController.getOneBiayaSewa);

/***************************BSKENDARAAN********************************* */

/***************************BRSPPD********************************* */

router.get("/brsppd", biayarepController.getAllBiayaRep);
router.post("/brsppd", biayarepController.addBiayaRep);
router.put("/brsppd/:id", biayarepController.updateBiayaRep);
router.delete("/brsppd/:id", biayarepController.deleteBiayaRep);
router.get("/brsppd/:id", biayarepController.getOneBiayaRep);

/***************************BRSPPD********************************* */

/***************************SPD********************************* */

router.get("/spd", spdController.getAllSpd);
router.post("/spd", spdController.addSpd);
router.put("/spd/:id", spdController.updateSpd);
router.delete("/spd/:id", spdController.deleteSpd);
router.get("/spd/:id", spdController.getOneSpd);

/***************************SPD********************************* */

/***************************SPT********************************* */

router.get("/spt", sptController.getAllSpt);
router.post("/spt", sptController.addSpt);
router.put("/spt/:id", sptController.updateSpt);
router.delete("/spt/:id", sptController.deleteSpt);
router.get("/spt/:id", sptController.getOneSpt);

/***************************SPT********************************* */

/***************************PSPPD********************************* */

router.get("/psppd", pertanggungController.getAllPsppd);
router.post("/psppd", pertanggungController.addPsppd);
router.put("/psppd/:id", pertanggungController.updatePsppd);
router.delete("/psppd/:id", pertanggungController.deletePsppd);
router.get("/psppd/:id", pertanggungController.getOnePsppd);

/***************************PSPPD********************************* */

/***************************KWITANSI********************************* */

router.get("/kwitansi", kwitansiController.getAllKwitansi);
router.post("/kwitansi", kwitansiController.addKwintasi);
router.put("/kwitansi/:id", kwitansiController.updateKwintasi);
router.delete("/kwitansi/:id", kwitansiController.deleteKwintasi);
router.get("/kwitansi/:id", kwitansiController.getOneKwintasi);

/***************************KWITANSI********************************* */

/***************************NP2D********************************* */

router.get("/np2d", np2dController.getAllNp2d);
router.post("/np2d", np2dController.addNp2d);
router.put("/np2d/:id", np2dController.updateNp2d);
router.delete("/np2d/:id", np2dController.deleteNp2d);
router.get("/np2d/:id", np2dController.getOneNp2d);

/***************************NP2D********************************* */

/***************************SP2D********************************* */

router.get("/sp2d", sp2dController.getAllSp2d);
router.post("/sp2d", sp2dController.addSp2d);
router.put("/sp2d/:id", sp2dController.updateSp2d);
router.delete("/sp2d/:id", sp2dController.deleteSp2d);
router.get("/sp2d/:id", sp2dController.getOneSp2d);

/***************************SP2D********************************* */

/***************************PROVINSI********************************* */

router.get("/provinsi", provinsiController.getAllProv);

/***************************PROVINSI********************************* */

/***************************JABATAN********************************* */

router.get("/jabatan", jabatanController.getAllJab);

/***************************JABATAN********************************* */

/***************************GOLONGAN********************************* */

router.get("/golongan", golonganController.getAllGol);

/***************************GOLONGAN********************************* */

/***************************PANGKAT********************************* */

router.get("/pangkat", pangkatController.getAllPang);

/***************************PANGKAT********************************* */

/***************************KOTA********************************* */

router.get("/kota", kotaController.getAllKota);

/***************************KOTA********************************* */

/***************************BERKENDARA********************************* */

router.get("/berkendara", berkendaraController.getAllBerkendara);

/***************************BERKENDARA********************************* */

/***************************BIDANG********************************* */

router.get("/bidang", bidangController.getAllBidang);

/***************************BIDANG********************************* */
module.exports = router;
