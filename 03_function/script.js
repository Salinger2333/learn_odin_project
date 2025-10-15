const input = document.querySelector('#inputBox')
const output = document.querySelector('#output')

input.addEventListener('keydown', (event) => {
    output.textContent = `You pressed: ${event.key}`
})