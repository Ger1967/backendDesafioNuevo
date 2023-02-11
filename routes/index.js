const express = require("express");
const router = express.Router();
const {
  list,
  listEstadisticas,
  listEstadisticasById,
  register,
  agregarEstadisticas,
  deleteDeportista,
  // multer,
  // addFoto,
} = require("../controllers/index");

router.get("/deportistas", list);
router.get("/estadisticas", listEstadisticas);
router.get("/estadisticas/:id", listEstadisticasById);
router.post("/deportistas/register", register);
router.post("/deportistas/add/estadisticas", agregarEstadisticas);
router.delete("/deportistas/delete/:id", deleteDeportista);
// router.post("/deportistas/add/foto/:id", addFoto);
// router.post("/deportistas/add/foto/multer", multer);

module.exports = router;
