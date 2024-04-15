var fs = require('fs');

fs.readdir('./archivos', {withFileTypes:true}, (error, items)=>{
    console.log(items)
})
//withfiletypes, significa que incluye el tipo de archivo cuando se muestra