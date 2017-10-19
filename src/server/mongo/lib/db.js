'use strict'

const uuid = require('uuid-base62')
const utils = require('./utils')
const co = require('co')
const Promise = require('bluebird')

const User = require('../models/user')
const Publication = require('../models/publication')

let defaults = {
  name: 'parquesgirdb',
  port: 27017,
  url: 'mongodb://parquesgir.test',
  setup: false
}

class Db {
  constructor (options) {
    options = options || {}
    this.name = options.name || defaults.name
    this.port = options.port || defaults.port
    this.url = options.url || defaults.url
    this.setup = options.setup || defaults.setup
  }

  connect (callback) {
    this.connection = mongoose.connect(`${this.host}:${this.port}/${this.db}`, {
      useMongoClient: true
    })

    this.connected = true

    let connection = this.connection

    let setup = co.wrap(function * () {
      let conn = yield Promise.resolve(connection)

      return Promise.resolve(conn)
    })

    return Promise.resolve(setup()).asCallback(callback)
  }

  disconnect (callback) {
    if (!this.connected) {
      return Promise.reject(new Error('not connected')).asCallback(callback)
    }

    this.connected = false
    return Promise.resolve(mongoose.disconnect())
  }

  saveAnUser (user, callback) {
    let usr = new User(user)
    console.log('saveUser Mongoose')

    usr.cc = user.cc
    usr.name = user.name
    usr.email = user.email
    usr.passwd = user.passwd
    usr.facebook = user.facebook
    usr.idSocial = user.idSocial
    usr.profile_image = user.profile_image

    let created = usr.save((err, cred) => {
      if (err) console.log(err)

      console.log('Guardando usuario')
      return cred
    })

    return created
  }

  getIdSocial (id, callback) {
    console.log('getByIdSocial Mongoose')

    User.findOne({ 'idSocial': id }, (err, usr) => {
      if (err) console.log(err)
        
      return usr
    })


  if (!this.connected) {
      return Promise.reject(new Error('not connected')).asCallback(callback)
    }

    let tasks = co.wrap(function * () {
      let result = yield Promise.resolve(User.find({ email: email })
        .exec(function (err, docs) {
          if (err) {
            console.log(err)
          }

          return docs
        }))

      return Promise.resolve(result)
    })

    return Promise.resolve(tasks()).asCallback(callback)
  }

}

module.exports = Db
