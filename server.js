const express = require('express')
const importedData = require('./data.json')

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log('Hello Shri Krishna')
    res.send("Hello Shri Krishna");
})

app.get('/achyutashtakam', (req, res) =>{
    res.send(importedData);
} )

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})