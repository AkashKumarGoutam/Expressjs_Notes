//  after the port set how to show content on the browser


const express = require("express")
const app = express();
 


const PORT = process.env.PORT || 3000;

// showing root content here
app.get('/' , (req , res)=>{
    // res.send("Hello Express js")
    res.send("<h1>Hello akash</h1>")
})
//  \\\\\


app.listen(PORT , ()=>{
    console.log(`Listening are port ${PORT}`);
})