// create Express Routers
const router = require('express').Router();


router.get('/' , (req , res) =>{
    res.render("index" , {
        title : "My Home Page"
    })
})

router.get('/about' , (req , res) =>{
    res.render("about" , {
        title : "My About Page"
    })
})





module.exports = router;