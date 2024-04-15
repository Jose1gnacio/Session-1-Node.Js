var http = require('http');

var servidor = http.createServer( function(peticion, respuesta){
    
    respuesta.writeHead(200, {'Content-type': 'text/html'})
    respuesta.write("<h1>Respuesta para la direccion</h1> " + peticion.url)
    console.log("Servidor corriendo, peticion web");

})

servidor.listen(3000);
console.log("Ejecutando servidor NodeJs");
