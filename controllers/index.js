const knex = require("../config/knexFile");
// const formidable = require("formidable");
// const fs = require("fs");
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

exports.agregarEstadisticas = async (req, res) => {
  const {
    id,
    energia,
    fuerza,
    resistencia,
    agilidad,
    aguante,
    dedicacion,
    profecionalismo,
  } = req.body;
  knex("estadisticas")
    .insert({
      id: id,
      energia: energia,
      fuerza: fuerza,
      resistencia: resistencia,
      agilidad: agilidad,
      aguante: aguante,
      dedicacion: dedicacion,
      profecionalismo: profecionalismo,
    })
    .then((resultado) => {
      res.json({ messagee: "Se ha registrado un nuevo deportista" });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

// exports.addFoto = async (req, res, next) => {
//   const { id } = req.params.id;
//   const { addFoto } = req.body;
//   const form = formidable.IncomingForm();
//   const uploadFolder = path.join(__dirname, "public", "img");
//   form.multiples = true;
//   form.maxFileSize = 50 * 50 * 50;
//   form.uploadDir = uploadFolder;
//   form.parse(req, async (err, fields, files) => {
//     if (err) {
//       console.log("Error parsing the files");
//       return res.status(400).json({
//         status: "Fail",
//         message: "There was an arror parsing the files",
//         error: err,
//       });
//     }
//     if (!files.myFile.length) {
//       const file = files.myFile;
//       const isValid = isFileValid(file);
//       const fileName = encodeURIComponent(file.name.replace(/\s/g, "-"));
//       if (!isValid) {
//         return res.status(400).json({
//           status: "Fail",
//           message: "The file type is not a valid type",
//         });
//       }
//       try {
//         fs.renameSync(file.path, join(uploadFolder, fileName));
//       } catch (error) {
//         console.log(error);
//       }
//       try {
//         const newFile = await File.create({
//           name: `Img/${fileName}`,
//         });
//         knex("deportistas").insert({ foto: addFoto.foto }).where("id", id);
//         return res.status(200).json({
//           status: "success",
//           message: "File created successfully!!",
//           file: newFile.name,
//         });
//       } catch (error) {
//         res.json({
//           error,
//         });
//       }
//     } else {
//     }
//   });
// };
