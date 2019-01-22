const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Crear Schema
const UserSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  fechaNacimiento: {
    type: Date,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  sexo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  }
});
module.exports = User = mongoose.model("users", UserSchema);
