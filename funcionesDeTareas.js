var fs = require("fs");

//Lee el archivo tareas.json
let tareasJSON = fs.readFileSync("./db/tareas.json", "utf-8");

//Parsea el Json para que se muestre como un array
let leerTareas = JSON.parse(tareasJSON)

module.exports = leerTareas