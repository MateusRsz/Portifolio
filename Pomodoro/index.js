let display = document.querySelector('#display')
let btn_rs = document.querySelector('.btn_rs')
let start = document.querySelector('#start')

var segundos = 0
var minutos = 0
function more() {
    minutos++
    display.textContent = `${minutos}:${segundos}`
}

function starte() {
    if (segundos > 0) {
        segundos--
    } else if (segundos == 0) {
        minutos--
        segundos = 59
    }
    display.textContent = `${minutos}:${segundos}`
    setInterval(1000, starte())
}
console.log(minutos)


