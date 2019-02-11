const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const exphbs = require("express-handlebars");
const path = require("path");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const viajes = require("./routes/api/viajes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

// Conectar a mongodb
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Passport config
require("./config/passport")(passport);

//Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/viajes", viajes);
app.use(express.static(path.join(__dirname + '/public')));

const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.render("index/index");
})
//CONFIG HANDLEBARS
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", exphbs({
  defaultLayout: "main",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  extname: ".hbs",
  helpers: require("./config/handlebars")
}));
app.set("view engine", ".hbs");

app.listen(port, () => console.log(`Server running on port ${port}`));
