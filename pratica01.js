let cont 

let vetorpar = []

let vetorImpar = []

for(cont = 1; cont <= 100; cont ++){

    console.log(cont)

    if(cont % 2 != 0)
        vetorImpar.push(cont)

}
console.log("vetor For: " + vetorpar)
console.log("Contador = " + cont)

while(cont >= 0){
if(cont & 2 !=0)
vetorImpar.push(cont)

cont --

}

console.log("Vetor while: " + vetorImpar)