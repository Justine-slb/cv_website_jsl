const express = require('express')
const hbs = require('hbs');
const path = require('path');

// Server Creation //
const app = express()
app.use(express.static('static'));


const port = process.env.PORT || 2000;

// Template & Component setup //

app.set('views', 'static');
app.set('view engine', 'hbs');


hbs.registerPartials(path.join(__dirname, 'static/partials'));

let route = require("./route/route");
app.use("/",route);

app.listen(port, err => {
    if(err) throw err;
    console.log("%c Server running", "color: green");
});