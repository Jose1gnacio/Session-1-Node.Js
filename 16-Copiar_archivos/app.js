var fs = require('fs');

fs.copyFile('./archivos/Archivo_original.txt', './archivos/copia_archivo.txt', (error)=>{
    if(error){
        console.log("Ha ocurrido un error");
        throw error;
    }else{
        console.log('Archivo copiado exsitosamente');
    }
})