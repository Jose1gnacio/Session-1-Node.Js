var fs = require('fs');

fs.readFile('./archivos/text.txt', 'utf8', (error, datos)=>{
    if(error){
        console.log("Error de lectura: " + error);//de esta forma mostramos inmeidatamente el error
        throw error;// de esta forma mostramos el error y detenemos el programa
    }else{
        console.log(datos);
    }
})