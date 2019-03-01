const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const User = require('../models/User');
const Viaje = require('../models/Viaje');
const mongoose = require('mongoose');

// PAGINA INDEX
router.get('/', (req, res) => res.render('index'));

//PAGINA DASHBOARD
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  User.findById(req.user.id).then(user => {
    if (user.admin) {
      Viaje.find({ status: "libre" }).sort({ fechaPartida: -1 }).then(viajes => {
        Viaje.find({ status: "ocupado" }).then(viajesOcupados => {
          Viaje.find({ status: "espera" }).then(viajesEspera => {
            Viaje.find({ status: "libre" }).count().then(countLibres => {
              Viaje.find({ status: "ocupado" }).count().then(countOcupados => {
                Viaje.find({ status: "espera" }).count().then(countEspera => {
                  res.render("dashboard", {
                    countLibres,
                    countEspera,
                    countOcupados,
                    user: req.user,
                    viajes,
                    viajesEspera,
                    viajesOcupados
                  })
                })
              })
            })
          });
        });
      });
    } else {
      res.redirect("rana");
    }
  }).catch(err => res.status(402).json(err));
});

//PAGINA PERFIL ADMINISTRADOR
router.get('/adminProfile', ensureAuthenticated, (req, res) => {
  User.findById(req.user.id).then(user => {
    if (!req.user.admin) {
      return res.redirect('rana');
    }
    res.render("adminProfile", {
      user: req.user
    });
  });
});

//CONTROLADOR PERFIL ADMINISTRADOR
router.post('/actAdmin', ensureAuthenticated, (req, res) => {
  User.findById(req.user.id).then(user => {
    if (!req.user.admin) {
      return res.redirect('rana');
    }
    const adminUp = {}
    adminUp.nombre = req.body.nombre;
    adminUp.email = req.body.email;

    User.updateOne(user, { $set: { nombre: adminUp.nombre, email: adminUp.email } }).then(adminUpdated => {
      res.redirect('adminProfile');
    })
  });
});

//CONTROLADOR CREAR ADMIN
router.post('/actAdmin', ensureAuthenticated, (req, res) => {
  User.findById(req.user.id).then(user => {
    if (!req.user.admin) {
      return res.redirect('rana');
    }
  });
});

//CONTROLADOR CREAR ADMIN
router.post('/crearAdmin', ensureAuthenticated, (req, res) => {
  const correo = req.body.emailAdmin;
  User.findOne({ email: correo }).then(newAdmin => {
    User.updateOne(newAdmin, { "$set": { "admin": true } }).then(adminList => { });
    res.redirect('adminProfile')
  });
});

//PAGINA ALTA DE VIAJES
router.get('/altaViaje', ensureAuthenticated, (req, res) => {
  User.findById(req.user.id).then(user => {
    if (!req.user.admin) {
      return res.status(402).json({ denegado: "acceso denegado" });
    }
    res.render("altaViaje", {
      user: req.user
    });
  });
});

//CONTROLADOR DE ALTA DE VIAJE
router.post('/altaViaje', ensureAuthenticated, (req, res) => {
  User.findById(req.user.id).then(user => {
    if (!req.user.admin) {
      return res.status(402).json({ denegado: "acceso denegado" });
    }
    const { precio, tipoDestino, lugarPartida, lugarDestino, fechaPartida, fechaRegreso, tipoHospedaje, claseHospedaje, comidaHospedaje, checkIn, checkOut, tipoTransporte, lineaTransporte } = req.body;
    let errors = [];
    console.log(precio, tipoDestino, lugarPartida, lugarDestino, fechaPartida, fechaRegreso, tipoHospedaje, claseHospedaje, comidaHospedaje, checkIn, checkOut, tipoTransporte, lineaTransporte);
    if (!precio || !tipoDestino || !lugarPartida || !lugarDestino || !fechaPartida || !fechaRegreso || !tipoHospedaje || !claseHospedaje || !comidaHospedaje || !checkIn || !checkOut || !tipoTransporte || !lineaTransporte) {
      errors.push({ msg: 'Llena todos los campos' });
    }

    if (errors.length > 0) {
      res.render('altaViaje', {
        errors,
        precio,
        tipoDestino,
        lugarPartida,
        lugarDestino,
        fechaPartida,
        fechaRegreso,
        tipoHospedaje,
        claseHospedaje,
        comidaHospedaje,
        checkIn,
        checkOut,
        tipoTransporte,
        lineaTransporte
      })
    } else {
      const newViaje = new Viaje({
        errors,
        precio,
        tipoDestino,
        lugarPartida,
        lugarDestino,
        fechaPartida,
        fechaRegreso,
        tipoHospedaje,
        claseHospedaje,
        comidaHospedaje,
        checkIn,
        checkOut,
        tipoTransporte,
        lineaTransporte
      });

      //GUARDAMOS EL NUEVO VIAJE
      newViaje.save().then(viaje => res.json(viaje));
      res.redirect("dashboard");
    }
  }).catch(err => res.status(402).json(err));
});

//CONTROLADOR BORRAR VIAJE
router.get("/borrar/:id", ensureAuthenticated, (req, res) => {

  Viaje.findById(req.params.id).then(viaje => {
    User.findOne({ user: req.user.id }).then(user => {
      //CHECAMOS SI TIENE PERMISOS DE ADMIN
      if (!req.user.admin) {
        return res.status(401).json({ denegado: "no tienes permisos" });
      }

      //QUITAMOS EL VIAJE DEL USUARIO
      const userdiviaje = viaje.user;
      User.findById(userdiviaje).then(userViaje => {
        User.updateOne(userViaje, { $pull: { viajes: { idViaje: viaje.id } } }).then(() => { });
      }).catch(err => res.status(404).json({ viajonoencontrado: "no se encontro viaje" }));;

      //BORRAMOS VIAJE
      viaje.remove().then(() => res.redirect('/dashboard'));
    })
  }).catch(err => res.status(404).json({ viajonoencontrado: "no se encontro viaje" }));
});

//PAGINA USUARIO RANA
router.get('/rana', ensureAuthenticated, (req, res) => {
  User.findOne({ user: req.user.id }).then(user => {
    if (req.user.admin) {
      return res.redirect('dashboard');
    }

    res.render('rana', {
      user: req.user,
      viajesEncu: req.user.viajesEncuesta,
      viajesUser: req.user.viajes
    });
  });
});

//SELECCIONAR VIAJE SIGERIDO DE ENCUESTA
router.get('/tomarViaje/:id', ensureAuthenticated, (req, res) => {
  Viaje.findById(req.params.id).then(viaje => {
    User.findById(req.user.id).then(user => {
      const viajeUser = {}
      viajeUser.idViaje = viaje.id;
      viajeUser.status = viaje.status;
      viajeUser.tipoDestino = viaje.tipoDestino;
      viajeUser.lugarPartida = viaje.lugarPartida;
      viajeUser.lugarDestino = viaje.lugarDestino;
      viajeUser.fechaPartida = viaje.fechaPartida;
      viajeUser.fechaRegreso = viaje.fechaRegreso;
      viajeUser.tipoHospedaje = viaje.tipoHospedaje;
      viajeUser.claseHospedaje = viaje.claseHospedaje;
      viajeUser.comidaHospedaje = viaje.comidaHospedaje;
      viajeUser.checkIn = viaje.checkIn;
      viajeUser.checkOut = viaje.checkOut;
      viajeUser.tipoTransporte = viaje.tipoTransporte;
      viajeUser.lineaTransporte = viaje.lineaTransporte;
      viajeUser.precio = viaje.precio;

      //VERIFICAMOS DISPONIBILIDAD DE VIAJE
      if (viaje.status != "libre") {
        return res.redirect('rana');
      }

      //QUITAMOS EL VIAJE SELECCIONADO DEL ARREGLO DE VIAJES ENCUESTA
      // const objIdUser = mongoose.Types.ObjectId(user.id);
      // const objIdViaje = mongoose.Types.ObjectId(viaje.id);
      // User.update({ '_id': objIdUser }, { $pull: { "viajesEncuesta": { '_id': objIdViaje } } });
      // User.update({ '_id': user.id }, { $pull: { "viajesEncuesta": { '_id': viaje.id } } });


      //ACTUALIZAMOS CAMPOS DE VIAJE Y USUARIOS
      User.updateOne(user, { $push: { "viajes": [viajeUser] } }).then(UserUp => {
        Viaje.updateOne(viaje, { $set: { user: user.id, userNombre: user.nombre, userCorreo: user.email, userTelefono: user.telefono, status: "espera" } }).then(viajeUp => { });
      });

      res.redirect('rana');
    });
  }).catch(err => res.redirect('/rana'));
});

//CANCELAR VIAJE SELECCIONADO DE LA SUGERENCIA DE ENCUESTA
router.get('/bajaViaje/:id', ensureAuthenticated, (req, res) => {
  Viaje.findById(req.params.id).then(viaje => {
    const userId = viaje.user;
    const objIdViaje = mongoose.Types.ObjectId(viaje.id);
    User.findById(req.user.id).then(user => {
      User.update({ '_id': user.id }, { $pull: { "viajes ": { 'idViaje': [objIdViaje] } } }).then(userAct => { });

    });
    // User.update({ '_id': userId }, { $pull: { "viajes ": { 'idViaje': objIdViaje } } }).then(userAct => {});
  });
  // res.redirect('rana');
});

//PAGINA ENCUESTA RANA
router.get('/encuesta', ensureAuthenticated, (req, res) => {
  if (req.user.admin) {
    return res.redirect('dashboard');
  }
  res.render('encuesta', {
    user: req.user
  });
});

//CONTROLADOR ENCUESTA RANA
router.post("/encuesta", ensureAuthenticated, (req, res) => {
  User.findById(req.user.id).then(user => {
    const encuesta = {};
    encuesta.tipoRana = req.body.tipoRana;
    encuesta.tipoDestino = req.body.tipoDestino;
    encuesta.fechaEstimada = req.body.fechaEstimada;
    encuesta.transporte = req.body.transporte;

    Viaje.find({ tipoDestino: encuesta.tipoDestino }).limit(3).then(viajes => {

      if (user.viajesEncuesta.length === 0) {
        User.updateOne(user, { $push: { "viajesEncuesta": viajes } }).then();
      } else {
        User.updateOne(user, { $set: { "viajesEncuesta": viajes } }).then();
      }

    });

    res.redirect('rana');

  });

});

//AUTORIZAR VIAJE
router.get("/autorizar/:id", ensureAuthenticated, (req, res) => {
  Viaje.findById(req.params.id).then(viajes => {
    User.findOne({ user: req.user.id }).then(user => {
      //CHECAMOS SI TIENE PERMISOS DE ADMIN
      if (!req.user.admin) {
        return res.status(401).json({ denegado: "no tienes permisos" });
      }


    });
  });
});

module.exports = router;
