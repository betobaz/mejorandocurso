var onReady = function(){
	$('#enviar-mensaje').on("click", clickHandler);
	messagesRequest();
},
	clickHandler = function(){
		console.log($('#mensaje').val());
		var jqxhr = $.post("/mensajes/new",{
			mensaje: $('#mensaje').val()
		});

		jqxhr
			.done(function(data){
				console.log("mensajes mandandola con exito", data);
			})
			.fail(function(data){
				console.log("error");
			});
		$('#mensaje').val("")	;
	},
	messagesRequest = function(){
		var jqxhr = $.get("/mensajes/list");
		jqxhr.done(function(data){
			$('#chat').empty();
			data.forEach(function(mensaje){
				var li = $('<li>').html(mensaje);
				$('#chat').append(li);
			});
			messagesRequest();
		})
		.fail(function(data){

		})
	}



$(document).on('ready', onReady);