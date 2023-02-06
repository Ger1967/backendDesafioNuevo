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

exports.register = async (req, res) => {
  const {
    nombre,
    especialidad,
    edad,
    altura,
    peso,
    nacionalidad,
    record,
    descripcion,
    // idestadisticas,
  } = req.body;
  knex("deportistas")
    .insert({
      nombre: nombre,
      especialidad: especialidad,
      edad: edad,
      altura: altura,
      peso: peso,
      nacionalidad: nacionalidad,
      record: record,
      descripcion: descripcion,
      // idestadisticas: idestadisticas,
    })
    .then((resultado) => {
      res.json({ messagee: "Se ha registrado un nuevo deportista" });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
