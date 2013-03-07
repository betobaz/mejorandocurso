var express = require("express"),
	swig = require("swig"),
	cons = require("consolidate");
	app = express(),
	mensajes = [],
	ress = [];

swig.init({
	cache: false
});

app.engine('.html', cons.swig);
app.set('view engine', 'html');
app.set('views','./views');
//Agregado plugin static, se indica que 
app.use(express.static('./public'));

app.use(express.bodyParser());
app.use(express.cookieParser());

app.get("/", function(req, res){
	res.render("home",{
		mensajes: mensajes
	});
});
// Post


app.post("/mensajes/new", function(req, res){
	// por post se obtiene los paramentros con body
	mensajes.push(req.body.mensaje);
	ress.forEach(function(res){
		res.send(mensajes);
	});
	res.send("Tu mensaje es :" + req.body.mensaje);
});

app.get("/mensajes/list", function(req, res){
	ress.push(res);
	//res.send();
})

app.listen(3000);
console.log("Aplicacion funcionando");