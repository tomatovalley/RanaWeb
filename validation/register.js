const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.nombre = !isEmpty(data.nombre) ? data.nombre : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.fechaNacimiento = !isEmpty(data.fechaNacimiento)
    ? data.fechaNacimiento
    : "";
  data.sexo = !isEmpty(data.sexo) ? data.sexo : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  //VALIDA EL LARGO DEL NOMBRE
  if (!Validator.isLength(data.nombre, { min: 2, max: 30 })) {
    errors.nombre = "El nombre debe contener entre 2 y 30 caracteres";
  }
  //VALIDA EL CAMPO DEL NOMBRE
  if (Validator.isEmpty(data.nombre)) {
    errors.nombre = "El campo del nombre es requerido.";
  }
  //VALIDA EL CAMPO DE LA CONTRASEÑA
  if (Validator.isEmpty(data.email)) {
    errors.email = "El campo del correo es requerido.";
  }
  //VALIDA QUE SEA UN CORREO
  if (!Validator.isEmail(data.email)) {
    errors.email = "El correo no es valido";
  }
  //VALIDA EL CAMPO DE LA CONTRASEÑA
  if (Validator.isEmpty(data.password)) {
    errors.password = "El campo de contraseña es requerido.";
  }
  //VALIDA EL LARGO DE LA CONTRASEÑA
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "La contraseña debe contener entre 2 y 30 caracteres";
  }
  //VALIDA EL CAMPO DE CONTRASEÑA DE CONFIRMACION
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "El campo de confirmacion de contraseña es requerido.";
  }
  //VALIDA LA CONTRASEÑA DE CONFIRMACION
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Las contraseñas deben coincidir.";
  }
  //VALIDA CAMPO DE FECHA DE NACIMIENTO
  if (Validator.isEmpty(data.fechaNacimiento)) {
    errors.fechaNacimiento = "El campo de la fecha de nacimiento es requerido.";
  }
  //VALIDA CAMPO DE SEXO
  if (Validator.isEmpty(data.sexo)) {
    errors.sexo = "El campo del sexo es requerido.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
