var express = require("express"),
	app = express(),
	mensajes = [],
	ress = [];

app.get("/", function(req, res){
	res.send("hellow world");
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