const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Viaje = require("../../models/Viaje");
const User = require("../../models/User");
const validarViajesInput = require("../../validation/viajes");

router.get("/test", (req, res) => res.json({ msg: "Viajes" }));

//CREAR VIAJE
router.post("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    const { errors, isValid } = validarViajesInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newViaje = new Viaje({
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

    newViaje.save().then(viaje => res.json(viaje));
});

//OBTENER TODOS LOS VIAJES
router.get("/", (req, res) => {
    //SOLO VIAJES LIBRES
    // Viaje.find({ status: "libre" }).then(viajes => res.json(viajes)).catch(err => res.status(404).json({ viajesNoEncontrados: "No encontramos viajes libres" }));

    Viaje.find().sort({ fechaPartida: -1 }).then(viajes => res.json(viajes)).catch(err => res.status(404).json({ viajesNoEncontrados: "No encontramos viajes." }));
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
                return res.status(401).json({ user });
            }

            //BORRAMOS VIAJE
            viaje.remove().then(() => res.json({ viajeBorrado: "viaje borrado con exito" }));
        })
    }).catch(err => res.status(404).json({ viajonoencontrado: "no se encontro viaje" }));
});

//AGARRAR VIAJE
router.post("/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    Viaje.findById(req.params.id).then(viaje => {

        User.findById(req.user.id).then(user => {
            if (viaje.status === "libre") {
                viaje.user = user.id;
                viaje.status = "espera";
                if (user.viajes) {
                    user.viajes.push(viaje)
                } else {
                    user.viajes = [viaje]
                }
                User.findOneAndUpdate({ id: user.id }, { upsert: true }, { $push: { viajes: viaje } }).then(UserUp => {
                    Viaje.updateOne(viaje).then(viajeUp => {
                    });
                });
            }
            return res.status(401).json({ user, viaje });

        }).catch(err => res.status(404).json(err));
    }).catch(err => res.status(404).json(err));
});

module.exports = router;