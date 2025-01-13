function contarPalabrasUnicas(texto) {
    // Dividir el texto en palabras eliminando espacios adicionales y convertir todo a minúsculas
    const palabras = texto.toLowerCase().split(" ");
    
    const palabrasUnicas = new Set(palabras);

    // Devolver el tamaño del conjunto, que corresponde al número de palabras únicas
    return palabrasUnicas.size;
}

const texto = "Hola mundo mundo de JavaScript";
console.log(contarPalabrasUnicas(texto)); 