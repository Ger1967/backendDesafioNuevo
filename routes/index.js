const express = require("express");
const router = express.Router();
const {
  list,
  listEstadisticas,
  listEstadisticasById,
  register,
} = require("../controllers/index");

router.get("/deportistas", list);
router.get("/estadisticas", listEstadisticas);
router.get("/estadisticas/:id", listEstadisticasById);
router.post("/deportistas/register", register);

module.exports = router;
