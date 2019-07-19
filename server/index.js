require('dotenv').config()
const express = require('express');
const controller = require('./controller')
const massive = require('massive')

const app = express()
app.use(express.json())

const PORT = 5000

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Database connection established')
})

app.get('/api/allhouses', controller.getAllHouses)
app.post('/api/house', controller.postHouse)

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))

