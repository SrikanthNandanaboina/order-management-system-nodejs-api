var express  = require('express'); //including express 
var bodyParser = require('body-parser');
var app = new express(); // Creating instance 
var port = 9009;  // setting port for the application  
var router = express.Router();
const fs = require('fs');

app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));
app.use(bodyParser.json());

fs.readdirSync(__dirname+"/src/routes").forEach(function(file) {
    
    if (file === "index.js" || file.substr(file.lastIndexOf('.') + 1) !== 'js')
        return;
    var name = file.substr(0, file.indexOf('.'));
    require('./src/routes/'+name)(app,router);
});

app.listen(port,function(err)
{
	if(typeof(err)=='undefined')
	{
		console.log('Your application is running on : ' + port + ' port');
	}
	else
	{
		console.log('Your application is not running Try with another port!!!!');	
	}
});




