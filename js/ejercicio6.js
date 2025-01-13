


function sonIguales(arreglo1, arreglo2){
    if  (arreglo1.length !== arreglo2.length) {
        return false
    }

    const first = new Set(arreglo1);
    const second = new Set(arreglo2);

    return first.size === second.size && [...first].every(item =>second.has(item))
    
}

console.log(` ${[1, 2, 3]}  ${[3, 2, 1]}  ${sonIguales([1, 2, 3], [3, 2, 1])}`);
console.log(` ${[1, 2, 3]}  ${[1, 2, 4]}  ${sonIguales([1, 2, 3], [1, 2, 4])}`);
console.log(` ${[1, 2, 2, 3]}  ${[3, 2, 1]} ${sonIguales([1, 2, 2, 3], [3, 2, 1])}`);