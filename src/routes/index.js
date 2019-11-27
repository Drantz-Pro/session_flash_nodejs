const express = require('express')
const router = express.Router()

router.get('/' , (req , res)=>{

    res.render('index')

})


router.post('/register' , (req ,res ) => {

    console.log(req.body);

   // req.session.userdata = req.body;

   // req.flash('user' , req.body)

    req.flash('success',"now your are register");

    res.redirect('/profile')

})


router.get('/profile', (req , res) => {

   // const user = req.session.userdata;
   // delete req.session.userdata;

  // const user = req.flash('user')[0];
    //const message = req.flash('success')[0];

    res.render('profile')

})

router.get('/products' , (req ,res ) => {

    res.render('products')

})


module.exports = router;