const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//VALIDACION DE INPUTS
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

router.get("/registro", (req, res) => res.render("users/registro"));

// REGISTRAR USUARIO NUEVO
router.post("/registro", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email ya existe";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        password: req.body.password,
        fechaNacimiento: req.body.fechaNacimiento,
        sexo: req.body.sexo
      });

      //ENCRIPTA CONTRASEÑA Y LA GUARDA EN MONGODB
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// LOGIN
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  console.log(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    //checa usuario
    if (!user) {
      errors.email = "Usuario no encontrado";
      return res.status(404).json(errors);
    }
    //checa contraseña
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, admin: user.admin, name: user.nombre };
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 86400 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Contraseña incorrecta";
        return res.status(400).json(errors);
      }
    });
  });
});

router.get("/index", (req, res) => {
  res.render("users/");
});
//ENCUESTA
router.post("/encuesta", passport.authenticate("jwt", { session: false }), (req, res) => {

  User.findById(req.user.id).then(user => {
    const encuesta = {};
    encuesta.tipoRana = req.body.tipoRana;
    encuesta.tipoDestino = req.body.tipoDestino;
    encuesta.fechaEstimada = req.body.fechaEstimada;
    encuesta.transporte = req.body.transporte;

    if (user.encuesta.length === 0) {
      //AGREGAMOS PRIMERA RESPUESTA DE ENCUESTA
      User.updateOne(user, { $push: { "encuesta": [encuesta] } }).then(() => { });
    } else {
      //ACTUALIZAMOS ENCUESTA
      User.updateOne(user, { $set: { "encuesta": { tipoRana: encuesta.tipoRana, tipoDestino: encuesta.tipoDestino, fechaEstimada: encuesta.fechaEstimada, transporte: encuesta.transporte } } }).then(() => { });
    }
    console.log(user.encuesta.length)
    res.status(401).json(encuesta);
  });

});
// VER SESION ACTIVA
router.get("/current", passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      nombre: req.user.nombre,
      email: req.user.email,
      admin: req.user.admin
    });
  }
);

//VALIDACION ADMIN O USER
// router.use((req, res, next) => {
//   if (!req.user.admin) {
//     return res.json({
//       success: false,
//       message: 'Admin access needed'
//     })
//   }
//   next();
// });

// router.get('/dashboard', (req, res) => {
//   return res.json({
//     success: true,
//     message: 'You Are and Admin'
//   })
// });

module.exports = router;
