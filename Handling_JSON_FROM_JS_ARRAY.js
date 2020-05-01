// JS KEY VALUE PAIR 
const book = {
    title:'Ego is the Enemy',
    author: 'Ryan Holiday'
}

//CONVERTING ABOVE DATA TO JSON FORMATTED DATA

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

//PARSING JSON DATA AND ACCESSING ATTRIBUTES

const parsedData =  JSON.parse(bookJSON)
console.log(parsedData.author) 

//WRITING INTO JSON FILE
const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json',bookJSON)

READING A JSON FILE// STORE IN DATA BUFFER AND CONVERT TO String and parse to access the attributes

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)



