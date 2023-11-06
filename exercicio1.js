let itens = 15
let valorCompra = 1000

if(itens >= 10){
    valorCompra = valorCompra - (valorCompra * 0.10)
console.log(`Valor da compra com 10% de desconto: ${valorCompra}`)
} else {
    console.log("Voce não tem direito ao desconto, o valor da sua compra é: " + valorCompra)
}