/**
 * Created by princ on 2016-10-08.
 */

var express = require('express');

var app = express();

app.disable('x-powered-by');

var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handelbars');

// MORE IMPORTS HERE


app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/',function (req, res) {
   res.render('home');
});








app.listen(app.get('port',function () {
    console.log("express started on http://localhost:" + app.get('port_'));
}));

