const express = require("express");
const router = express.Router();
const { list, listEstadisticas } = require("../controllers/index");

router.get("/deportistas", list);
router.get("/estadisticas", listEstadisticas);

module.exports = router;
