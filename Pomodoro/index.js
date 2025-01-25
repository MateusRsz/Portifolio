let displai = document.querySelector('#display')
let btn_rs = document.querySelector('.btn_rs')
let start = document.querySelector('#start')

var segundos = 0
var minutos = 0
function more() {
    minutos++
    displai.textContent = `${minutos}:${segundos}`
}
function less() {
    minutos--
    displai.textContent = `${minutos}:${segundos}`
}
displai.textContent = `${minutos}:${segundos}`

function tempo() {
    if (minutos == 0 && segundos == 0) {
    } else if (segundos > 0) {
        segundos--

    } else if (segundos == 0) {
        minutos--
        segundos = 59
    } else if (minutos == 0 && segundos == 0) {

    }
    displai.textContent = `${minutos}:${segundos}`
}

function starte() {
    setInterval(tempo, 1000)
}

function reset() {
    
    segundos = 0
    minutos = 0
}


