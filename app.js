const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect("/index.html");
    console.log("Metodo raiz /");
});
app.get('/clientes', (req, res) => {
    res.redirect("/clientes.html");
    console.log("Metodo GET /clientes");
});
app.get('/productos', (req, res) => {
    res.redirect("/productos.html");
    console.log("Metodo GET /productos");
});
app.listen(9000, ()=> { 
    console.log("Servidor en puerto 9000");
});