const express = require('express')
const app = express()
const path = require('path')
const { handlebars, engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('connect-flash')
const port = 3000


//json
app.use(express.json());

//cookies
app.use(cookieParser());

// config session
var minute = 60000

app.use(session({
    secret: 'meu_segredo',
    cookie: {
        maxAge: minute * 60,
    },
    resave: true,
    saveUninitialized: true
}));

// req flash
app.use(flash())    


app.use((req, res, next) => {

    // flash config
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    
    next()

})

//config
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

//template engine
app.engine('handlebars', engine({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())


// importando a rota a utilizar na Home
const indexRouter = require('./routes/indexRouter')

//usando a rota importada 
app.use('/', indexRouter)


//servidor local onde vai rodar a aplicação
app.listen(port, () => {
    console.log('Rodando na url http://localhost:' + port)
})
