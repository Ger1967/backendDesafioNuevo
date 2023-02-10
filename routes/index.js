const express = require("express");
const router = express.Router();
const {
  list,
  listEstadisticas,
  listEstadisticasById,
  register,
  agregarEstadisticas,
  // addFoto,
} = require("../controllers/index");

router.get("/deportistas", list);
router.get("/estadisticas", listEstadisticas);
router.get("/estadisticas/:id", listEstadisticasById);
router.post("/deportistas/register", register);
router.post("/deportistas/add/estadisticas", agregarEstadisticas);
// router.post("/deportistas/add/foto/:id", addFoto);

module.exports = router;
