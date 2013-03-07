var express = require("express"),
	app = express(),
	server = require('http').createServer(app),
	io =	require('socket.io').listen(server),
	cons =	require("consolidate");

server.listen(3000);

app.engine(".html", cons.jade);
app.set("view engine", "html");

app.use(express.static("./public"));

app.get("/", function(req, res){
	res.render("index",{
		titulo: "Hola"
	});
});

var connectionHandler = function(socket){
	socket.on("pintar", function(data){
		console.log("pintar", data);
		socket.broadcast.emit("pintar", data);
	})
};

io.sockets.on("connection",connectionHandler);