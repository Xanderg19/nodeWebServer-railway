require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT
//handlebar
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


//servir contenido estatico
app.use(express.static('public'))



app.get('/',  (req, res) => {
  res.render('home',{
    nombre:'Hector',
    titulo:'curso de Node'
  });
})

app.get('/elements',  (req, res) => {
    res.render('elements',{
        nombre:'Hector',
        titulo:'curso de Node'
      });
})

app.get('/generic',  (req, res) => {
    res.render('generic',{
        nombre:'Hector',
        titulo:'curso de Node'
      });
})



app.listen(port, () =>{
    console.log(`El puerto se esta corriendo en el puerto ${port}...`)
})