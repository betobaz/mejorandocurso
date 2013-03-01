/*
	Objetos de javascript
	Browser 	-> navigator
		Tiene:
			- Manipulación de acelerometro
	Ventana/Tab -> 	window
		Tiene:
			- tamaño de la ventana
	Documento	->	document
		Tiene:
			- El DOM
*/

/*
	jQuery es representado tambien por el alias $
*/

$(document).on("ready", inicio);

function inicio()
{
	// Aqui va todo el codigo relacionado con DOM

	// Asignación de una manejador del evento click para el elemento
	// que tiene el id personalizar y ejecutará la función personalizar
	$("#personalizar").on("click", personalizar);
}


function personalizar(evt){
	evt.preventDefault();
	// JSON 
	var cambiosCSS = 
	{
		margin: 0,
		overflow: "hidden",
		padding: 0,
		width: 0
	};
	var cambiosPersonalizacion = 
	{
		height: "auto",
		opacity: 1,
		width: "40%"
	}
	$('#historia').css(cambiosCSS);
	$('#personalizacion').css(cambiosPersonalizacion);
	$("#color div").on("click", cambiarColor);
}

function cambiarColor(evt)
{
	var colorito = $(this).attr("id"),
		nuevoCoche = "c"+colorito+".jpg";
	$("#cochecito img").attr("src", nuevoCoche);
}