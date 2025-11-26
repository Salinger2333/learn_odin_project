const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}'
const json = JSON.parse(text,(key, value) => {
    if(key === 'birth'){
       return value = new Date(value)
    } else{
        return value
    }
})
// json.birth = new Date(json.birth)
console.log(json);