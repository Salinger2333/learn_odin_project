const input = document.querySelector('#inputBox')
const output = document.querySelector('#output')

input.addEventListener('keydown', (event) => {
    output.textContent = `You pressed: ${event.key}`
})



let showPrimes = function (limit) {

    nextPrime: for (let i = 2; i < limit; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue nextPrime
        }
        alert(i)
    }
}

