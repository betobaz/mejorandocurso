var express = require("express"),
	app = express(),
	mensajes = [];

app.get("/", function(req, res){
	res.send("hellow world");
});

app.get("/mensajes/new/:mensaje", function(req, res){
	// obtener los parametros con req.params
	mensajes.push(req.params.mensaje);
	res.send("Tu mensaje es :" + req.params.mensaje);
});

app.get("/mensajes/list", function(req, res){
	res.send(mensajes+'<script>setTimeout(function(){window.location.reload()}, 1000)</script>');
})

app.listen(3000);
console.log("Aplicacion funcionando");