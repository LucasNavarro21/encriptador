// 1-obtengo el texto
// 2-lo separo con split
// 3-lo encripto recorriendo cada parte del split
// 4-lo uno en un cadena


let cadenaEncriptada = "";
let cadenaDesencriptada = ""
function obtenerTexto(){
    texto = document.querySelector(".inputEncriptar").value;
    return texto;
}

function procesoPalabra(){
    cadena = obtenerTexto().split(" ");
    let cadenaEncriptada = encriptado(cadena);
    console.log(cadenaEncriptada);
    mostrarInput();
    aplicarEstilos();
    document.querySelector(".contenedorInputDesencriptar input").value = cadenaEncriptada;
}

function procesoPalabra2(){
    cadena = obtenerTexto();
    let cadenaDesencriptada = desconvertirLetra(cadena);
    console.log(desconvertirLetra(cadena)); 
    document.querySelector(".contenedorInputDesencriptar input").value = cadenaDesencriptada;
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

function desconvertirLetra(palabra){

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
// cadena = texto.split(" ");
// console.log(cadena);
// console.log(convertirLetra("a")); 
function encriptado(cadena){
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

function desencriptado(cadena){
    cadenaEncriptada = ""; // Resetear la cadena encriptada antes de empezar
    for (let i = 0; i < cadena.length; i++) {
        const palabra = cadena[i];
        // console.log(palabra);
        let palabraEncriptada = ""; // Cadena temporal para la palabra encriptada
        for (let j = 0; j < palabra.length; j++) {
            palabraEncriptada += desconvertirLetra(palabra[j]);
        }
        // Añadir la palabra encriptada a la cadena final con un espacio
        cadenaEncriptada += palabraEncriptada + " ";
        // console.log(palabraEncriptada);

    }
    // Eliminar el último espacio añadido
    return cadenaEncriptada.trim();
}

function vacio(){
    let contenedorDesencriptado = document.querySelector(".contenedorDesencriptador");
    let campo = document.querySelector(".contenedorInputDesencriptar input");
    if(campo.value == ""){
        console.log("no hay nada");
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

// let saludo = "hola"
// for (let i = saludo.length - 1; i >= 0; i--) {

//         console.log(saludo[i]);
    
// }


const mediaQuery = window.matchMedia("(max-width: 768px)");

function aplicarEstilos(){
    let contenedorEncriptador = document.querySelector(".contenedorEncriptador");

    if(mediaQuery.matches){
        contenedorEncriptador.style.flexGrow = 1.3;
    }
}



