const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ViajeSchema = new Schema({
    status: {
        type: String,
        required: false,
        default: "libre"
    },
    precio: {
        type: Number,
        required: true
    },
    user: {
        type: String
    },
    tipoDestino: {
        type: String,
        required: true
    },
    lugarPartida: {
        type: String,
        required: true
    },
    lugarDestino: {
        type: String,
        required: true
    },
    fechaPartida: {
        type: Date,
        required: true
    },
    fechaRegreso: {
        type: Date,
        required: true
    },
    tipoHospedaje: {
        type: String,
        required: true
    },
    claseHospedaje: {
        type: String,
        required: true
    },
    comidaHospedaje: {
        type: Boolean,
        required: true
    },
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    tipoTransporte: {
        type: String,
        required: true
    },
    lineaTransporte: {
        type: String,
        required: true
    }
});
module.exports = Viaje = mongoose.model("viaje", ViajeSchema);