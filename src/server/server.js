'use strict'

import express from 'express'
import expressSession from 'express-session'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import config from './config'
import girpark from 'parquesgir-client'
import auth from './auth'
import multer from 'multer'
import ext from 'file-extension'

// Create Instances
const app = express()
const client = new girpark.createClient()

const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'production'

// Almacenamiento de imagenes
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, + Date.now() + '.' + ext(file.originalname))
  }
})

var upload = multer({ storage: storage }).single('picture')

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

passport.use(auth.facebookStrategy)
passport.deserializeUser(auth.deserializeUser)
passport.serializeUser(auth.serializeUser)

// Messages for auth process
let badAccess = 'A ocurrido un error al ingresar con '

app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }))

app.get('/auth/facebook/callback', passport.authenticate('facebook', {

  successRedirect: '/',
  failureRedirect: `/error/${badAccess + ' facebook'}` }))

app.get('/whoami', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user)
  } else {
    res.send([])
  }
})

app.get('/logout', (req, res) => {
  req.logout()

  res.redirect('/')
})

function ensureAuth (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.status(401).send({ error: 'not authenticated' })
}

// Content Endpoints
app.get('/', (req, res) => {
  res.render('index', { title: 'Inicio' })
})

app.get('/user/folder', ensureAuth, (req, res) => {
  res.render('index', { title: 'Portafolio' })
})

app.get('/api/folder/:id', ensureAuth, (req, res) => {
  let userId = req.params.id
  let token = req.user.token

  client.getPapersByUserId(userId, token, (err, papers) => {
    if (err) res.status(500).send(err.message)

    res.status(200).send(papers)
  })
})

app.post('/user/folder/add-paper', ensureAuth, (req, res) => {
    let data = req.body
    let token = req.user.token
    data.userId = req.user.exposedId
    data.user = {
      profile_image: req.user.profile_image,
      name: req.user.name
    }

    client.saveAPaper(data, token, (err, paper) => {
      if (err) {
        return res.status(500).send(err.message)
      }
      
      res.send(paper)
    })
})

app.post('/upload-image', ensureAuth, (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      return res.status(500).send(`Error uploading file: ${err.message}`)
    }

    let data = req.body

    console.log(data)

    let token = req.user.token
    data.imgSrc = req.file.path
    data.userId = req.user.exposedId
    data.user = {
      profile_image: req.user.profile_image,
      name: req.user.name
    }

    // client.saveAnPaper(data, token, (err, paper) => {
    //   if (err) {
    //     return res.status(500).send(err.message)
    //   }
      
    //   res.send('Article uploaded')
    // })
  })
})

app.listen(port, () => console.log(`Parques Gir server listening on port ${port}`))
