// import express js
const express = require("express")
//  express js return function  then we are store the the into the app variables
const app = express();
 


// how to listen PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>{
    console.log(`Listening are port ${PORT}`);
})