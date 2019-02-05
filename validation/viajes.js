const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateViajesInput(data) {
    let errors = {};

    data.tipoDestino = !isEmpty(data.tipoDestino) ? data.tipoDestino : "";
    data.lugarPartida = !isEmpty(data.lugarPartida) ? data.lugarPartida : "";
    data.lugarDestino = !isEmpty(data.lugarDestino) ? data.lugarDestino : "";
    data.fechaPartida = !isEmpty(data.fechaPartida) ? data.fechaPartida : "";
    data.fechaRegreso = !isEmpty(data.fechaRegreso) ? data.fechaRegreso : "";
    data.tipoHospedaje = !isEmpty(data.tipoHospedaje) ? data.tipoHospedaje : "";
    data.clase = !isEmpty(data.clase) ? data.clase : "";
    data.comida = !isEmpty(data.comida) ? data.comida : "";
    data.checkIn = !isEmpty(data.checkIn) ? data.checkIn : "";
    data.checkOut = !isEmpty(data.checkOut) ? data.checkOut : "";
    data.tipoTransporte = !isEmpty(data.tipoTransporte) ? data.tipoTransporte : "";
    data.linea = !isEmpty(data.linea) ? data.linea : "";


    //VALIDA EL CAMPO DE LA CONTRASEÑA
    if (Validator.isEmpty(data.tipoDestino)) {
        errors.tipoDestino = "El campo de tipo del desino es requerido.";
    }
    if (Validator.isEmpty(data.lugarPartida)) {
        errors.lugarPartida = "El campo del lugar de partida es requerido.";
    }
    if (Validator.isEmpty(data.lugarDestino)) {
        errors.lugarDestino = "El campo de lugar de destino es requerido.";
    }
    if (Validator.isEmpty(data.fechaPartida)) {
        errors.fechaPartida = "El campo de la fecha de salida es requerido.";
    }
    if (Validator.isEmpty(data.fechaRegreso)) {
        errors.fechaRegreso = "El campo de la fecha de regreso es requerido.";
    }
    if (Validator.isEmpty(data.tipoHospedaje)) {
        errors.tipoHospedaje = "El campo del tipo de hospedaje es requerido.";
    }
    if (Validator.isEmpty(data.claseHospedaje)) {
        errors.clase = "El campo de la clase de hospedaje es requerido.";
    }
    if (Validator.isEmpty(data.comidaHospedaje)) {
        errors.comida = "El campo de comida en hospedaje es requerido.";
    }
    if (Validator.isEmpty(data.checkIn)) {
        errors.checkIn = "El campo del checkIn del hospedaje es requerido.";
    }
    if (Validator.isEmpty(data.checkOut)) {
        errors.checkOut = "El campo del checkOut del hospedaje es requerido.";
    }
    if (Validator.isEmpty(data.tipoTransporte)) {
        errors.tipoTransporte = "El campo del tipo de transporte es requerido.";
    }
    if (Validator.isEmpty(data.lineaTransporte)) {
        errors.linea = "El campo de linea de transporte es requerido.";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
