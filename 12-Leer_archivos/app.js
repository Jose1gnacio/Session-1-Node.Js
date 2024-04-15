var fs = require('fs');
//lectura por bloques de codigo
//var contenido = fs.readFileSync('./archivos/texto.txt', 'utf8');

//Lectura asincrona de información muy pesada y obtenida cuando sea necesario y asi no se bloquea
var contenido = fs.readFile('./archivos/texto.txt', 'utf8', function(error, datos){
    console.log(datos)
} );


console.log("yo aparezco primero " + contenido);