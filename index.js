// PUZZLE CHALENGES AND INTERVIEW QUESTIONS


/* 
IS ANAGRAM FUNCTION:

The idea of this puzzle is to make a function that accept to strings as parameters 
and return true or false depending if the second string is an Anagram of the first. 
*/

/*(1)*/
const isAnagram = (stringA,stringB) =>{
    let sortA = stringA.toLowerCase().split(' ').join('').split('').sort().join('')
    let sortB = stringB.toLowerCase().split(' ').join('').split('').sort().join('')
    
    if(sortA === sortB){
        return true
    }else{
        return false
    }
}

/*(1)*/
console.log(isAnagram('La mOnalisa','limala asno')) //Returns true.

// ----------------------------------------------------------------------------------


/* 
SUM WITHOUT USING "+"":

The idea of this puzzle is to make a function that accept to numbers as parameters 
and return the sum of those numbers but without using the plus(+) symbol. 
*/

/*(2)*/
const add = (a,b) =>{

    let result = -(-a-b) //We never use the "+" symbol.
    return result    
}

/*(2)*/
console.log(add(2,2)) //Returns 4.

// ----------------------------------------------------------------------------------


/* 
ACOUNT MOVEMENTS:

The idea of this puzzle is, that given an object with an acount information including acount movements inside an array, 
you have to print all the acount information as shown below, grouping the acount movements by consecutives dues.

Example:

Input--
var datos = {
	cuenta: "123456",
	nombre: "Juan",
	apellido: "Pérez",
	cuotas: [
		{ cuota: 13, importe: 123.4567 },
		{ cuota: 7, importe: 234.5678 },
		{ cuota: 2, importe: 456.7890 },
		{ cuota: 11, importe: 567.8901 },
		{ cuota: 3, importe: 678.9012 },
		{ cuota: 9, importe: 789.0123 },
		{ cuota: 12, importe: 890.1234 },
		{ cuota: 14, importe: 901.2345 },
		{ cuota: 8, importe: 12.3456 },
	]
}


Expected output--
Numero de cuenta:  123456
Apellido y Nombre: PÉREZ, Juan

Cuotas Pendientes:      2-3
Importe adeudado:       $1135.69

Cuotas Pendientes:      7-9
Importe adeudado:       $1035.93

Cuotas Pendientes:      11-14
Importe adeudado:       $2482.70

Total:                  $4654.32

*/

/*(3)*/

// Acount information
let datos = {
	cuenta: "123456",
	nombre: "Juan",
	apellido: "Pérez",
	cuotas: [
		{ cuota: 13, importe: 123.4567 },
		{ cuota: 7, importe: 234.5678 },
		{ cuota: 2, importe: 456.7890 },
		{ cuota: 11, importe: 567.8901 },
		{ cuota: 3, importe: 678.9012 },
		{ cuota: 9, importe: 789.0123 },
		{ cuota: 12, importe: 890.1234 },
		{ cuota: 14, importe: 901.2345 },
		{ cuota: 8, importe: 12.3456 },
	]
}


const {cuotas} = datos

// Sorting the array
cuotas.sort((a,b) => a.cuota - b.cuota)
// Sorting the array
let agrupado = []
// Creating a new array with sub arrays with the first and last due of the set
for(let j=0;j<cuotas.length;j++){
	let inicial = cuotas[j].cuota
	let acc = cuotas[j].cuota
	preAgrupado = []
	for(let i = j;i<cuotas.length;i++){
		if(cuotas[i+1] && (acc + 1) === cuotas[i + 1].cuota){
			acc = cuotas[i+1].cuota
			j++
		}
	}
	if(inicial === acc){
		preAgrupado.push(inicial)
	}else{
		preAgrupado.push(inicial)
		preAgrupado.push(acc)
	}
	agrupado.push(preAgrupado)
}
// Creating a new array with sub arrays with the first and last due of the set

// Indexing the due's array in order to make easy the import search later
const indexado = cuotas.reduce((acc,e) =>({
	...acc,
	[e.cuota]:e.importe
}),{})
// Indexing the due's array in order to make easy the import search later

let total = 0
// Adding the subtotal for each set of dues and the total import.
for(let i=0;i<agrupado.length;i++){
	let subTotal = 0 
	for(j=agrupado[i][0];j<agrupado[i][1]+1;j++){
		subTotal += indexado[`${j}`]
	}
	agrupado[i].push(subTotal.toFixed(2))
	total += subTotal
}
// Adding the subtotal for each set of dues and the total import.

/*(3)*/
console.log(`Numero de cuenta:  ${datos.cuenta}`)
console.log(`Apellido y Nombre: ${datos.apellido.toUpperCase()}, ${datos.nombre}\n`)
agrupado.forEach(grupo => {
	console.log(`Cuotas Pendientes: 	${grupo[0]}-${grupo[1]}`)
	console.log(`Importe adeudado: 	$${grupo[2]}\n`)
})
console.log(`Total: 			$${total.toFixed(2)}`)

/*
Returns:
Numero de cuenta:  123456
Apellido y Nombre: PÉREZ, Juan

Cuotas Pendientes:      2-3
Importe adeudado:       $1135.69

Cuotas Pendientes:      7-9
Importe adeudado:       $1035.93

Cuotas Pendientes:      11-14
Importe adeudado:       $2482.70

Total:                  $4654.32
*/

// ----------------------------------------------------------------------------------