const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  //VALIDA QUE SEA UN CORREO
  if (!Validator.isEmail(data.email)) {
    errors.email = "El correo no es valido";
  }
  //VALIDA EL CAMPO DE LA CONTRASEÑA
  if (Validator.isEmpty(data.email)) {
    errors.email = "El campo del correo es requerido.";
  }
  //VALIDA EL CAMPO DE LA CONTRASEÑA
  if (Validator.isEmpty(data.password)) {
    errors.password = "El campo de contraseña es requerido.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
