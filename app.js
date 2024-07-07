function obtenerTexto(){
    texto = document.querySelector(".inputEncriptar").value;
    return texto;
}

let input = document.querySelector(".contenedorInputEncriptar input");

input.addEventListener("input", function(event) {
    let valor = event.target.value;
    valor = valor.toLowerCase();
    const valorSinAcentos = valor.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    if (valor !== valorSinAcentos) {
        input.value = valorSinAcentos;
    }else{
        input.value = valor;
    }
});
//ver evento input, preguntar por logica y por el even target

function validarEscritura(texto){

    if(texto == ""){
        return alert("Ingrese texto por favor");
    }else{
        console.log("hola");
        return texto;
    }
}
function encriptado(){
    let cadena = obtenerTexto();
    if(validarEscritura(cadena)){
        cadena = obtenerTexto().split(" ");
        let cadenaEncriptada = procesoEncriptacion(cadena);
        console.log(cadenaEncriptada);
        mostrarInput();
        aplicarEstilos();
        document.querySelector(".contenedorInputDesencriptar input").value = cadenaEncriptada;
    }
}

function desencriptado(){
    cadena = obtenerTexto();
    if(validarEscritura(cadena)){
        let cadenaDesencriptada = procesoDesencriptado(cadena);
        // console.log(procesoDesencriptado(cadena)); 
        mostrarInput();
        aplicarEstilos();
        document.querySelector(".contenedorInputDesencriptar input").value = cadenaDesencriptada;
    }
}

function convertirLetra(palabra){

    switch(palabra){
        case "a":
            palabra = "ai"
            break;
        case "e":
            palabra = "enter"
            break;
        case "i":
            palabra = "imes"
            break;
        case "o":
            palabra = "ober"
            break;
        case "u":
            palabra = "ufat"
            break;
    }
    return palabra;
}

function procesoDesencriptado(palabra){

    palabra = palabra.replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
        
    return palabra;
}

function copiar(){
   inputEncriptado = document.querySelector(".contenedorInputDesencriptar input").value;
   document.querySelector(".contenedorInputEncriptar input").value = inputEncriptado; 

}

function procesoEncriptacion(cadena){
    cadenaEncriptada = ""; // Resetear la cadena encriptada antes de empezar
    for (let i = 0; i < cadena.length; i++) {
        const palabra = cadena[i];
        let palabraDesencriptada = ""; // Cadena temporal para la palabra encriptada
        for (let j = 0; j < palabra.length; j++) {
            palabraDesencriptada += convertirLetra(palabra[j]);
        }
        // Añadir la palabra encriptada a la cadena final con un espacio
        cadenaEncriptada += palabraDesencriptada + " ";
    }
    // Eliminar el último espacio añadido
    return cadenaEncriptada.trim();
}

function vacio(){
    let contenedorDesencriptado = document.querySelector(".contenedorDesencriptador");
    let campo = document.querySelector(".contenedorInputDesencriptar input");
    if(campo.value == ""){
        contenedorDesencriptado.innerHTML = `
                        <div class="contenedorImagen">
                <img class ="imagenInputVacio" src="https://cdn-icons-png.flaticon.com/256/11234/11234339.png" alt="">
            </div>
            <div class="textoContenedorVacio">
                <p>Ningún mensaje fue encontrado</p>
                <p>Ingresa el texto que desees encriptar o desencriptar.</p>
            </div>
        `;
    }
}
function mostrarInput(){
    let contenedorDesencriptado = document.querySelector(".contenedorDesencriptador");
    contenedorDesencriptado.innerHTML = `
     <div class="contenedorInputDesencriptar">
                <input type="text">
            </div>
            <div class="contenedorDesencriptarBoton">
                <button onclick="copiar()">Copiar</button>
            </div>
    `
}
vacio();


function aplicarEstilos(){
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    let contenedorEncriptador = document.querySelector(".contenedorEncriptador");

    if(mediaQuery.matches){
        contenedorEncriptador.style.flexGrow = 1.3;
    }
}



