const knex = require("../config/knexFile");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { TOKEN_SECRET } = require("../validators/jwt");

exports.list = (req, res) => {
  knex("deportistas")
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.listEstadisticas = (req, res) => {
  knex("estadisticas")
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

//com
exports.listEstadisticasById = (req, res) => {
  const id = req.params.id;
  knex("estadisticas")
    .where("id", id)
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
