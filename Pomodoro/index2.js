
let displai = document.querySelector('#display')
var minute = 0
var second = 0
displai.textContent = `${minute}:${second}`

class pomodoro {
    static propriedade = null
    static moreMinute() {
        minute++
        displai.textContent = `${minute}:${second}`
    }
    static lessMinute() {
        minute--
        displai.textContent = `${minute}:${second}`
    }
    static start() {
        this.propriedade = setInterval(() => {
            if (minute == 0 && second == 0) {
                alert('descanso')
                minute = 5
                setTimeout(() => {
                    alert('fim do pomodoro')
                    clearInterval(interval)
                    interval = undefined
                }, 295000)
            } else if (second > 0) {
                second--
            } else if (second == 0) {
                minute--
                second = 59
            }
            displai.textContent = `${minute}:${second}`

        }, 1000)


    }
    static reset() {
        clearInterval(this.propriedade)
        this.propriedade = null
        minute = 0
        second = 0
        displai.textContent = `${minute}:${second}`
    }

}

document.querySelector('#more_time').addEventListener('click', () => {
    pomodoro.moreMinute()
})

document.querySelector('#less_time').addEventListener('click', () => {
    if (minute == 0) {
        alert('Ação indisponivel')
    } else {
        pomodoro.lessMinute()
    }
})

document.querySelector('#start').addEventListener('click', () => {
    if (minute == 0 && second == 0) {
        alert("Minute required more when one or igual")
    } else { pomodoro.start() }
})

document.querySelector('#reset').addEventListener('click', () => {
    pomodoro.reset()
})


