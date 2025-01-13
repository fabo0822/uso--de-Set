let duplicados = [1,2,3,3,4,5]
let noDuplicados =[1,2,3,4,5]


function tieneDuplicados(arreglo){
const miset = new Set(arreglo); //se crea el set en el que se guardara 
return miset.size !== arreglo.length
}
console.log(duplicados + " " + tieneDuplicados(duplicados))
console.log(noDuplicados +" " + tieneDuplicados(noDuplicados))