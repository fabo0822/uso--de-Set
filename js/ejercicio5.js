const conjuntoA= [1,2,3,4,5];
const conjuntoB= [4,5,6,7,8];

const firstSet = new Set(conjuntoA);
const secondSet = new Set(conjuntoB);

const third = firstSet.difference(secondSet);
console.log(third)

