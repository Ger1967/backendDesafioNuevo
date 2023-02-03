const express = require("express");
const router = express.Router();
const {
  list,
  listEstadisticas,
  listEstadisticasById,
} = require("../controllers/index");

router.get("/deportistas", list);
router.get("/estadisticas", listEstadisticas);
router.get("/estadisticas/:id", listEstadisticasById);

module.exports = router;
