var fs = require('fs');


//forma de escribir, crear o guardar un archivo
fs.writeFile('./archivos/Texto-nuevo.txt', 'datos enviados desde node', (error)=>{
    if (error) {
        console.log("Hay un error al escribir archivo");
        throw error;
    } else {
        console.log("Archivo modificado correctamente");
    }
})

//forma de agregar informacion en un archivo al final del documento
fs.appendFile('./archivos/Texto-nuevo.txt', 'Nuevos datos', (error)=>{
    if (error) {
        console.log("Hay un error al escribir archivo");
        throw error;
    } else {
        console.log("Archivo modificado correctamente");
    }
})
