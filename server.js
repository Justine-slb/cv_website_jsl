const express = require('express')
const hbs = require('hbs');
const path = require('path');

// Server Creation //
const app = express()
app.use(express.static('static'));
const port = 1000
// Template & Component setup //

app.set('views', 'static');
app.set('view engine', 'hbs');


hbs.registerPartials(path.join(__dirname, 'static/partials'));

let route = require("backend/app");
app.use("/",route);

/*for load all other page in 404*/
app.listen(port, () => {
    console.log(`[Server] App listening on port ${port}`)
})