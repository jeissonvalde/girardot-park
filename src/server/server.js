'use strict'

import express from 'express'
import expressSession from 'express-session'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import config from './config'
import girpark from 'parquesgir-client'
import auth from './auth'

// Create Instances
const app = express()
const client = new girpark.createClient()

const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'production'


// Configure middlewares
app.set(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(expressSession({
  secret: config.secret,
  resave: false,
  saveUninitialized: false
}))
app.use(express.static('public'))
app.use(passport.initialize())
app.use(passport.session())

// Leave it here, for load the assets first, and
// no resend the these.
app.set('view engine', 'pug')

passport.use(auth.localStrategy)
passport.use(auth.facebookStrategy)
// passport.use(auth.twitterStrategy)
passport.deserializeUser(auth.deserializeUser)
passport.serializeUser(auth.serializeUser)


app.get('/', (req, res) => {
  res.render('index', { title: 'Aires GM' })
})


app.get('/welcome/:string', (req, res) => {
  res.render('index', { title: '¡Bienvenid@!' })
})


app.listen(port, () => console.log(`Parques Gir server listening on port ${port}`))
