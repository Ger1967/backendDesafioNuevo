const express = require("express");
const router = express.Router();
const { list } = require("../controllers/index");

router.get("/deportistas", list);

module.exports = router;
