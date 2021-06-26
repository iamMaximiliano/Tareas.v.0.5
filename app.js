//Indica el lugar de la consola tales que (NODE es posicion 0, APP posicion 1, ETC posicion 2..) process.argv[2] = ETC
const process = require("process");

//Requiere el modulo File System (fs nativo de Node.js) para poder utilizar sus metodos (leer, escribir, etc)
const leerTareas = require("./funcionesDeTareas");

let comando = process.argv[2];

switch (comando) {
    case "Listar":
        console.log(leerTareas)
        break;

    case undefined:
        console.log("Atención - Tienes quepasar una acción​.")
        break;

    default:
        console.log("No entiendo quéquieres hacer")
        break;
}
