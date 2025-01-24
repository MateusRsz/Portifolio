


let data = new Date()
let ano = data.getFullYear()
let mes = data.getMonth()
let Ano = ano - 2007
if (mes < 9) {
    Ano -= 1
}

console.log(Ano)
