const express = require("express");
const app = express();
const Jugadores = require("./5-Posiciones/lugares")


app.get("/", (req,res) => (res.json (Jugadores)));

const port = 3000;
app.listen(port, () => (console.log('Server running on port 3000')));