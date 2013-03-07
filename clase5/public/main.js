var onReady = function(){
	$('#enviar-mensaje').on("click", clickHandler);
},
	clickHandler = function(){
		console.log($('#mensaje').val());
		var jqxhr = $.post("/mensajes/new",{
			mensajes: $('#mensaje').val()
		});

		jqxhr
			.done(function(data){
				console.log("mensajes mandandola con exito", data);
			})
			.fail(function(data){
				console.log("error");
			});

	}


$(document).on('ready', onReady);