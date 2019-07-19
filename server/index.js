require('dotenv').config()
const express = require('express');
const controller = require('./controller')
const app = express()
const massive = require('massive')

const PORT = 5000

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Database connection established')
})

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))

