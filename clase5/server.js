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

app.get("/", function(req, res){
	res.render("home");
});

app.get("/mensajes/new/:mensaje", function(req, res){
	// obtener los parametros con req.params
	mensajes.push(req.params.mensaje);
	ress.forEach(function(res){
		res.send(mensajes+'<script>window.location.reload()</script>');
	});
	res.send("Tu mensaje es :" + req.params.mensaje);
});

app.get("/mensajes/list", function(req, res){
	ress.push(res);
	//res.send();
})

app.listen(3000);
console.log("Aplicacion funcionando");