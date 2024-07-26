// how to set EJS Template Engine :-
// 1. Install ejs :- ..................( npm install ejs)
// 2. set extension ejs in.......... 'index.ejs' 
//////////////////////////////////////////////////

const express = require('express');
// import Routers
const mainRouters = require('./routes/index')
const app = express();

//  use router 
app.use(mainRouters);
///////////////////

// set PORT   
const PORT = process.env.PORT || 3000;
app.listen(PORT , ()=>{
    console.log(`Listenning Port no:-- ${PORT}`);
})

// static middleware
// app.use(express.static('public'))
////////////////////////////

// Ejs tanmplate engine
app.set('view engine' , 'ejs');
/////////////////////////////


