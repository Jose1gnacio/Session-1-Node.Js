var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(peticion, respuesta) {
  respuesta.render('dinamico');
});

router.get('/:datoURL/:num', function(peticion, respuesta) {
  respuesta.render('dinamico', {
    datos:{
      titulo: peticion.params.datoURL,
      num: peticion.params.num
    }
  })
});


module.exports = router;
