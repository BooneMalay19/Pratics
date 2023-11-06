let vetorA = new Array()
let vetorB = []

vetorA.push(1)
vetorA.push(2)
vetorA.push(3)
vetorA.push(4)
vetorA.push(5)
vetorA.push(6)
vetorA.push(7)

console.log("INSERINDO: " + vetorA)

vetorA.pop()

console.log("REMOVENDO: " + vetorA)

vetorA.pop()

console.log("REMOVENDO: " + vetorA)

vetorB.unshift(6)
vetorB.unshift(7)
vetorB.unshift(8)
vetorB.unshift(9)
vetorB.unshift(10)
vetorB.unshift(11)
vetorB.unshift(12)

console.log("Vetor B - INSERINDO: " + vetorB)

vetorB.shift()
vetorB.shift()

console.log("Vetor B - REMOVENDO " + vetorB)
