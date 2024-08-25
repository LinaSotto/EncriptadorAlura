
///a=ai, e=enter, i=imes, o=ober, u=ufat///

var botonEncriptar = document.querySelector(".encriptar__boton");
var botonDesencriptar = document.querySelector(".desencriptar__boton");
var botonReiniciar = document.querySelector(".reiniciar__boton"); // Nuevo botón
var gatito = document.querySelector(".gatito");
var mensajes = document.querySelector(".encriptador__seccion2__mensajes");
var resultado = document.querySelector(".encriptador__seccion2__resultado");

botonEncriptar.onclick = Encriptar;
botonDesencriptar.onclick = Desencriptar;
botonReiniciar.onclick = resetearPagina; // Asignar la función de reinicio al botón

function Encriptar(){
    var cajaTexto = recuperarTexto();
    if (cajaTexto.trim() === "") {
        alert("Por favor, ingresa un texto para encriptar.");
        return;
    }
    ocultarCaja();
    resultado.textContent = encriptarTexto(cajaTexto);
}

function Desencriptar(){
    var cajaTexto = recuperarTexto();
    if (cajaTexto.trim() === "") {
        alert("Por favor, ingresa un texto para desencriptar.");
        return;
    }
    ocultarCaja();
    resultado.textContent = desencriptarTexto(cajaTexto);
}

function recuperarTexto(){
    var cajaTexto = document.querySelector(".cajatexto");
    return cajaTexto.value;
}

function ocultarCaja(){
    gatito.classList.add("ocultar");
    mensajes.classList.add("ocultar");
}

function resetearPagina(){
    // Elimina la clase 'ocultar' para volver a mostrar los elementos
    gatito.classList.remove("ocultar");
    mensajes.classList.remove("ocultar");
    resultado.textContent = ""; // Limpia el resultado
    document.querySelector(".cajatexto").value = ""; // Limpia el texto ingresado
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal += "ai";
        }
        else if(texto[i] == "e"){
            textoFinal += "enter";
        }
        else if(texto[i] == "i"){
            textoFinal += "imes";
        }
        else if(texto[i] == "o"){
            textoFinal += "ober";
        }
        else if(texto[i] == "u"){
            textoFinal += "ufat";
        }
        else{
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal += "a";
            i += 1;
        }
        else if(texto[i] == "e"){
            textoFinal += "e";
            i += 4;
        }
        else if(texto[i] == "i"){
            textoFinal += "i";
            i += 3;
        }
        else if(texto[i] == "o"){
            textoFinal += "o";
            i += 3;
        }
        else if(texto[i] == "u"){
            textoFinal += "u";
            i += 3;
        }
        else{
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

const copiarBoton = document.querySelector(".copiar__boton");
copiarBoton.addEventListener("click", () => {
    var mensaje = document.querySelector(".encriptador__seccion2__resultado").textContent;
    navigator.clipboard.writeText(mensaje);
    console.log("Texto copiado al portapapeles: " + mensaje);
});
