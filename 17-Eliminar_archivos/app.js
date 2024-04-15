var fs = require('fs');

fs.unlink('./archivos/dos.txt', (error)=>{
    if(error){
        console.log('error al eliminar el archivo');
        throw error;
    }else{
        console.log('archivo eliminado');
    }
})