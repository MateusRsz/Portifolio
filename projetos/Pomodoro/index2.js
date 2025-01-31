
let displai = document.querySelector('#display')
const click = new Audio('audio/click.mp3')
const end = new Audio('audio/end.mp3')
click.preload = 'auto'
end.preload = 'auto'

var minute = 0
var second = 0


displai.textContent = `${minute}:${second}`
class pomodoro {
    static propriedade = null

    static Alert() {
        let div = document.getElementById('alert')
        div.style.display = 'block'
        setTimeout(()=>{
            div.style.transition = 'opacity 3s'
            div.style.opacity = '0%'
        }, 10000)
       
    }
    static audioclick() {
        click.play()
        click.currentTime = 0
    }

    static moreMinute() {
        this.audioclick()
        minute++
        displai.textContent = `${minute}:${second}`
    }
    static lessMinute() {
        this.audioclick()
        minute--
        displai.textContent = `${minute}:${second}`
    }
    static start() {
        this.audioclick()
        this.propriedade = setInterval(() => {
            if (minute == 0 && second == 0) {
                this.Alert()
                end.play()
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
        this.audioclick()
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

