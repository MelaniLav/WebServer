
/*
const express = require('express')
const app = express()
const port = 8080;

app.use(express.static('public'));


//Direcciona a 404.html
app.get('*', (req, res)=> {
    res.sendFile(__dirname +'/public/404.html');
    })


app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`);
})

*/


const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;
app.set('view engine', 'hbs'); // para usar el handlebars para express

hbs.registerPartials(__dirname + '/views/partials'); //para usar parciales
//para servir contenido estatico
app.use(express.static('public')); //definicion de midelware express. si public esta en otro sitio especificar path

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Melani Laveriano',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Melani Laveriano',
        titulo: 'Curso de Node'
    })
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Melani Laveriano',
        titulo: 'Curso de Node'
    })
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`);
})

