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
import fs from 'fs'
import path from 'path'
import mongoose from 'mongoose'
import Db from './mongo/lib/db'

// Create Instances
const app = express()
const client = new girpark.createClient()
const db = new Db(config.db)

const port = process.env.PORT || 3000
const portdb = 27017 // 39092 - 27017 - 28015
const env = process.env.NODE_ENV || 'production'
const domain = 'localhost'

// Almacenamiento de imagenes
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/posts')
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
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '../../public')))
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

  res.redirect('/')
}

// Content Endpoints
app.get('/', (req, res) => {
  res.render('index', { title: 'Inicio' })
})

app.get('/user/folder', ensureAuth, (req, res) => {
  res.render('index', { title: 'Portafolio' })
})

app.get('/paper/:id', (req, res) => {
  res.render('index', { title: 'Artículo' })
})

app.get('/paper/edit/:id', ensureAuth, (req, res) => {
  res.render('index', { title: 'Artículo' })
})

app.put('/api/paper/edit/', ensureAuth, (req, res) => {
  let token = req.user.token
  let session = req.user.exposedId
  let paper = req.body

  if (session == paper.user) {
    delete paper.user
    client.updatePaper(paper, token, (err, msg) => {
      if (err) {
        res.status(500).send(err.message)
      }

      res.send(msg)
    })
  } else {
    res.status(500).send({ message : 'No estás autorizado' })
  }
})

app.get('/api/paper/:id', (req, res) => {
  let id = req.params.id

  client.getPaperById(id, (err, paper) => {
    if (err) {
      res.status(500).send(err.message)
    }

    res.send(paper)
  })
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

    const lastImg = req.body.lastImg.substr(41)
    let token = req.user.token
    let paper = {
      imgSrc: req.file.path,
      position: req.body.position,
      exposedId: req.body.exposedId
    }
    paper.imgSrc = paper.imgSrc.substr(6)

    client.updatePaper(paper, token, (err, msg) => {
      if (err) {
        res.status(500).send(err.message)
      }

      if (lastImg.substr(0, 5) != 'html-') {
        fs.unlink(`./public/images/posts/${lastImg}`, function (err) {
          if (err) console.log(err)

          console.log('imagen eliminada correctamente')
        })
      }
      res.send(msg)
    })
  })
})

mongoose.connect(`mongodb://${domain}:${portdb}/${config.db.name}`, (err, res) => {
  if (err) {
    return console.log(`Error al conectar a mongodb: ${err}`)
  }

  console.log('¡Conexión a la base de datos establecida!')
  app.listen(port, () => console.log(`Parques Gir server listening on port ${port}`))
})
