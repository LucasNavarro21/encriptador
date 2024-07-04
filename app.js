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

// for (let i = 10; i > 0; i--) {
//     // const element = array[i];
//     console.log(i);    
// }

let saludo = "hola"
for (let i = saludo.length - 1; i >= 0; i--) {

        console.log(saludo[i]);
    
}



