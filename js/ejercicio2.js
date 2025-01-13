const numerosDuplicado =[1,2,3,4,5,5,6,7,7,8,9,10]
const numerosUnicos= [...new Set (numerosDuplicado)];//se utilizo new Set para quitar los numero duplicado y crear un nuevo conjunto sin duplicar numeros
console.log(numerosUnicos)