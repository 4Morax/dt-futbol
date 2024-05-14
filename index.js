const express = require("express");
const app = express();
const Jugadores = require("./5-Posiciones/lugares")

app.get("/", (req,res) => (res.send ("Bienvenidoa mi Aplicacion"))); //Mensaje de bienvenida
app.get("/jugadores", (req,res) => (res.json (Jugadores)));
app.get("/sobre-mi", (req,res) => (res.send ("Aca deberia haber algo sobre mi")))
app.get("/messegas/:cualquier_mensaje", (req,res) => {
    const mensaje = req.params.cualquier_mensaje;
    res.send(`Su mensaje es ${mensaje}`)
})
app.get ("/include/texto/:cadena", (req,res) =>{
    const cadena = req.params.cadena;
    if (cadena === "cadena") {
        res.send(`La ${cadena} incluye texto`)
    }else {
        res.send(`La ${cadena} no incluye texto`)
    }
})

app.use (function (req, res, next) {
    res.status(400).send('Mensaje de error')
});

app.use (function (req, res, next) {
    res.status(404).send('Por aca no es mi rey')
});



const port = 3000;
app.listen(port, () => (console.log(`Server running on port ${port}`)));