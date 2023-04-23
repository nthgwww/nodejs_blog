const express = require("express");
const path = require('path');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars').engine;

app.use(express.static(path.join(__dirname, 'public')))

//use morgan to watch http request on terminal of VS
const morgan = require("morgan");
app.use(morgan("combined"));

//Template engine
app.engine("hbs", handlebars({
  extname:'.hbs'
}));
app.set("view engine", 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log('PATH : ',path.join(__dirname,'views')) 
//route
app.get('/', (req, res) => {
  res.render('home'); 
});

// app.get("/news", (req, res) => {
//   res.render('news');
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
