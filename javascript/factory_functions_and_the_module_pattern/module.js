const Formatter = (function () {
    let timesRun = 0
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

    const setTimesRun = () => {
        log('set times run')
        ++timesRun
    }

    const getTimesRun = () => {
        log('get times run')
        return timesRun
    }


    const makeUpperCase = (text) => {
        log('make upperCase')
        return text.toUpperCase()
    }


    return {
        makeUpperCase,
        getTimesRun,
        setTimesRun
    }
})();
console.log(Formatter.makeUpperCase('google ai studio'));
console.log(Formatter.getTimesRun());
console.log(Formatter.setTimesRun());
console.log(Formatter.getTimesRun());
console.log(Formatter.timesRun);

const docMock = (() =>
({
    querySelector: (selector) => ({
        textContent:null
    })
})) ()

const DomFormatter = (function (doc) {
    const writeToDom = (selector, text) => {
        doc.querySelector(selector).textContent = text
    }
    return {
        writeToDom
    }
})(document || docMock)




