// how to set EJS Template Engine :-
// 1. Install ejs :- ..................( npm install ejs)
// 2. set extension ejs in.......... 'index.ejs' 


const express = require('express');
const app = express();


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


// set url
app.get('/' , (req , res) =>{
    res.render("index" , {
        title : "My Home Page"
    })
})

app.get('/about' , (req , res) =>{
    res.render("about" , {
        title : "My About Page"
    })
})