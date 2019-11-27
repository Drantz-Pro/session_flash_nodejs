const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')


//setting
app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'ejs');


///middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(session({
    secret: 'mysecret_key',
    resave:false,
    saveUninitialized: false
}))
app.use(flash());


//global
app.use((req , res , next)=>{

    app.locals.message = req.flash('success')
    next();
})


//Routes
app.use(require('./routes/'))





app.listen(port, () => console.log(`Example app listening on port port!`))