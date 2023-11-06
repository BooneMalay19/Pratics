var vglobal = 4

function minhaFuncao(){
console.log("Dentro da Função" + vglobal)

}
console.log("Fora da Função" + vglobal)

minhaFuncao()



function outraFuncao(){

    var vlocal = 7
    console.log("Dentro da Função " + vlocal)

}

var vlocal = 157

console.log("Fora da Função" + vlocal)

outraFuncao()