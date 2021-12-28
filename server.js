const express = require('express')
const importedData = require('./data.json')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log('Hello Shri Krishna')
    res.send("Hello Shri Krishna");
})

app.get('/achyutashtakam', (req, res) =>{
    res.send(importedData);
} )

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})
