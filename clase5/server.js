var express = require("express"),
	app = express();

app.get("/", function(req, res){
	res.send("hellow world");
});

app.get("/mensajes/:mensaje", function(req, res){
	// obtener los parametros con req.params
	res.send("Tu mensaje es :" + req.params.mensaje);
});

app.listen(3000);
console.log("Aplicacion funcionando");