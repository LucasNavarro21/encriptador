// 1-obtengo el texto
// 2-lo separo con split
// 3-lo encripto recorriendo cada parte del split
// 4-lo uno en un cadena


let cadenaEncriptada = "";

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
    return palabra
}

// cadena = texto.split(" ");
// console.log(cadena);
// console.log(convertirLetra("a")); 
function encriptado(cadena){
    cadenaEncriptada = ""; // Resetear la cadena encriptada antes de empezar
    for (let i = 0; i < cadena.length; i++) {
        const palabra = cadena[i];
        let palabraEncriptada = ""; // Cadena temporal para la palabra encriptada
        for (let j = 0; j < palabra.length; j++) {
            palabraEncriptada += convertirLetra(palabra[j]);
        }
        // Añadir la palabra encriptada a la cadena final con un espacio
        cadenaEncriptada += palabraEncriptada + " ";
    }
    // Eliminar el último espacio añadido
    return cadenaEncriptada.trim();
}


