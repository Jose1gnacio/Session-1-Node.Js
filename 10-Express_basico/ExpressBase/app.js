
//**LIBRERIAS Y PAQUETES PARA EJECUTAR LA APPLCIACION
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pruebaRouter = require('./routes/prueba');//NUeva ruta
// nueva ruta agregada, tambien se agrego un nuevo archivo prueba.js en la carpeta routes

//**INICIALIZAMOS EXPRESS
var app = express();


//**CONFIGURACION DE LAS PLANTILLAS, EN ESTE CASO PUG
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//**SE DEFINEN LAS RUTAS
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/prueba', pruebaRouter);//Nueva ruta agregada


//**OPCIONES PARA MOSTRAR LA INFORMACION DE ERROR
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


/* SERVIDOR BASICO
 var express = require('express');
var app = express();

app.all('/', function(peticion, respuesta){
  respuesta.send('Hola mundo');
})

app.get('/acerca', function(peticion, respuesta){
  respuesta.send('Acerca de nosotros');
})

app.post('/acerca', function(peticion, respuesta){
  respuesta.send('Acerca de nosotros');
})

app.put('/acerca', function(peticion, respuesta){
  respuesta.send('Acerca de nosotros');
})

app.delete('/acerca', function(peticion, respuesta){
  respuesta.send('Acerca de nosotros');
})

var server = app.listen(3000, function(){
}); */