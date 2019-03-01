const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  fechaNacimiento: {
    type: Date,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
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
  },
  viajes: {
    type: Array,
    default: []
  },
  encuesta: {
    type: Array,
    default: []
  },
  viajesEncuesta: {
    type: Array,
    default: []
  }
});

module.exports = User = mongoose.model("users", UserSchema);
