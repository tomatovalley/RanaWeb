const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const User = require('../models/User');

// Login Page
router.get('/login', (req, res) => res.render('login'));

// Register Page
router.get('/register', (req, res) => res.render('register'));

// Register
router.post('/register', (req, res) => {
  const { nombre, telefono, sexo, fechaNacimiento, email, password, password2 } = req.body;
  let errors = [];

  if (!nombre || !email || !telefono || !sexo || !fechaNacimiento || !password || !password2) {
    errors.push({ msg: 'Llena todos los campos' });
  }

  if (password != password2) {
    errors.push({ msg: 'Las contraseñas no coinciden' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'La contraseña debe tener más de 8 caracteres' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      nombre,
      email,
      telefono,
      sexo,
      fechaNacimiento,
      password,
      password2
    });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'El correo ya está registrado.' });
        res.render('register', {
          errors,
          nombre,
          email,
          telefono,
          sexo,
          fechaNacimiento,
          password,
          password2
        });
      } else {
        const newUser = new User({
          errors,
          nombre,
          email,
          telefono,
          sexo,
          fechaNacimiento,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'Tu cuenta ha sido creada, ahora puedes ingresar.'
                );
                res.redirect('/users/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'Has salido de tu cuenta.');
  res.redirect('/users/login');
});

module.exports = router;
