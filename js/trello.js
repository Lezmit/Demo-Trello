window.addEventListener("load",function(){
	var contenedorLista = document.getElementById("columna-trello");
	var lista = document.getElementById("lista-trello");
	var formulario = document.getElementById("form-trello");
	var spanTexto= document.getElementById("lista-trello")
	formulario.classList.add("columna-trello");
	spanTexto.classList.add("span");
	
	spanTexto.addEventListener("click",function(){
		spanTexto.style.display="none";
		//crea formulario
		var inputTexto= document.createElement("input");
		inputTexto.setAttribute("placeholder", "Añadir una lista...");
		var boton=document.createElement("button");
		var textoBoton = document.createTextNode("Guardar");
		boton.appendChild(textoBoton);
		formulario.appendChild(inputTexto).classList.add("input-form");
		formulario.appendChild(boton).classList.add("boton-form");
		formulario.classList.add("form-ingreso");
	});
});
