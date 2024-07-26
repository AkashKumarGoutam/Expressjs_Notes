// How to change page url by the help of Express js

const express = require('express')
const path = require('path')
const app = express()


const PORT = process.env.PORT || 3000;

app.get('/' , (req , res) =>{
    res.sendFile(path.resolve(__dirname) + '/home.html')
})


app.get('/about' , (req , res) =>{
    res.sendFile(path.resolve(__dirname) + '/about.html')
})

app.listen(PORT , ()=>{
    console.log(`Listening Port No ${PORT}`)
})