const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Viaje = require("../../models/Viaje");
const User = require("../../models/User");
const validarViajesInput = require("../../validation/viajes");

router.get("/registro", (req, res) => res.render("viajes/registro"));

//CREAR VIAJE
router.post("/registro", passport.authenticate("jwt", { session: false }), (req, res) => {
    User.findOne({ user: req.user.id }).then(user => {
        //CHECAMOS SI TIENE PERMISOS DE ADMIN
        if (!req.user.admin) {
            return res.status(401).json({ denegado: "no tienes permisos" });
        }

        const { errors, isValid } = validarViajesInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        //CREAMOS EL NUEVO VIAJE
        const newViaje = new Viaje({
            precio: req.body.precio,
            tipoDestino: req.body.tipoDestino,
            lugarPartida: req.body.lugarPartida,
            lugarDestino: req.body.lugarDestino,
            fechaPartida: req.body.fechaPartida,
            fechaRegreso: req.body.fechaRegreso,
            tipoHospedaje: req.body.tipoHospedaje,
            claseHospedaje: req.body.claseHospedaje,
            comidaHospedaje: req.body.comidaHospedaje,
            checkIn: req.body.checkIn,
            checkOut: req.body.checkOut,
            tipoTransporte: req.body.tipoTransporte,
            lineaTransporte: req.body.lineaTransporte
        });

        //GUARDAMOS EL NUEVO VIAJE
        newViaje.save().then(viaje => res.json(viaje));
        res.render("viajes/registro");
    });
});

//OBTENER TODOS LOS VIAJES
router.get("/", (req, res) => {
    Viaje.find({ status: "libre" }).sort({ fechaPartida: -1 }).then(viajes => res.json(viajes)).catch(err => res.status(404).json({ viajesNoEncontrados: "No encontramos viajes." }));
});

//OBTENER VIAJE POR ID
router.get("/:id", (req, res) => {
    Viaje.findById(req.params.id).then(viaje => res.json(viaje)).catch(err => res.status(404).json({ viajeNoEncontrado: "No encontramos un viaje con ese ID" }));
});

//DAR DE BAJA VIAJE
router.delete("/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
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
            viaje.remove().then(() => res.json({ viajeBorrado: "viaje borrado con exito" }));
            return res.status(401).json(viaje);
        })
    }).catch(err => res.status(404).json({ viajonoencontrado: "no se encontro viaje" }));
});

//AGARRAR VIAJE
router.post("/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
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
                return res.status(401).json({ ocupado: "viaje ocupado" });
            }

            //ACTUALIZAMOS CAMPOS DE VIAJE Y USUARIOS
            User.updateOne(user, { $push: { "viajes": [viajeUser] } }).then(UserUp => {
                Viaje.updateOne(viaje, { $set: { user: user.id, status: "espera" } }).then(viajeUp => { });
            });

            return res.status(401).json(viaje);
        }).catch(err => res.status(404).json(err));
    }).catch(err => res.status(404).json(err));
});

module.exports = router;