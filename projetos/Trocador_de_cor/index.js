
let color = undefined
document.querySelector('#btn').addEventListener('click', () => {
    let input = document.querySelector("#in").value
    color = input
    document.body.style.backgroundColor = color
    document.getElementsByTagName('p')[0].style.display = 'none'
})

