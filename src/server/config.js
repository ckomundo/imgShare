const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const multer = require('multer');
const express = require('express');

const routes = require('../routes/index');

module.exports = app => {
    //setings
    app.set('port', process.env.PORT || 3000);
    
    //definir donde estan los archivos de partials
    app.set('views', path.join(__dirname, '../views'));
    app.engine('hbs', exphbs({
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'), 'layouts'),
        layoutsDir: path.join(app.get('views'), 'partials'),
        helpers: require('./helpers'),
        extname: '.hbs'
    }));
    console.log('peeerrooooo');
    app.set('view engine', 'hbs');
    //middlewares
    app.use(morgan('dev'))
    //manejo de imagenes
    app.use(multer({dest: path.join(__dirname, '../public/upload/temp')}).single('imgae'));
    //manejo de datos de formularios
    app.use(express.urlencoded({extended:false}));
    //manejo de likes
    app.use(express.json());
    //routes
    routes(app); 
    //errorhandles
return app;
}