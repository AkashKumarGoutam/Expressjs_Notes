//  static middleware :--  its helps to set url to change pages in short form

const express = require('express')
const app = express()


// this is static middleware
app.use(express.static('public'))
////////////////////////////////


// set port
const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>{
    console.log(`Listening port no ${PORT}`)
})