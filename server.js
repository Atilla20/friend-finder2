var express = require ('express');
var bodyParser = require('body-parser');
var app = express();

var path= require('path');

var PORT = process.env.PORT || 8080;

// The next lines, 11-22 will parse the bodies of all incoming requests.

app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

require('./app/routing/apiRoutes.js') (app); // put this first because you're pulling from this data to display inside your html pages. 
require('./app/routing/htmlRoutes.js')(app);


app.listen (PORT, function() {
    console.log("App listening on PORT: " + PORT);

});