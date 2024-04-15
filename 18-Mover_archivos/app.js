var fs = require('fs');
//COPIA DE ARCHIVO y generacion de archivo de confirmacion indicando que se copio exitosamente
/* fs.copyFile('./archivos/original.txt', './otros_archivos/original.txt', (error)=>{
    if(error){
        console.log("No se pudo copiar el archivo");
        throw error;
    }else{
        fs.writeFile('./archivos/confirmacion.txt', 'Archivo copiado OK', (error)=>{
            console.log('Proceso FInalizado')
        })
        console.log("Archivo copiado");
    }
}) */

//MOVER ARCHIVO, COPIANDO Y LUEGO ELIMINANDO
function copiarArchivo (rutaOriginal, nuevaRuta, archivoACOpiar){
    fs.copyFile(rutaOriginal + '/' + archivoACOpiar, nuevaRuta + '/' + archivoACOpiar, (error)=>{
        if(error){
            console.log("No se pudo copiar el archivo");
            throw error;
        }else{
            deleteFile(rutaOriginal, archivoACOpiar)
        }
    })
};
function deleteFile (rutaOriginal, archivoACOpiar){
    fs.unlink(rutaOriginal + '/' + archivoACOpiar, (error)=>{
        if(error){
            console.log("No se pudo eliminar el archivo");
            throw error;
        }else{
            console.log("Archivo copiado");
        }
    })
}
copiarArchivo('./archivos', './otros_archivos', 'original2.txt');