'use strict'

import girpark from 'parquesgir-client'
import config from '../config'
import jwt from 'jsonwebtoken'

const FacebookStrategy = require('passport-facebook').Strategy,
      // TwitterStrategy = require('passport-twitter').Strategy,
      LocalStrategy = require('passport-local').Strategy

const client = girpark.createClient(config.client)

function findOrCreate(user, callback) {
  client.getUsername(user.username, (err, usr) => {
    if (err) {
      return client.saveAnUser(user, callback)
    }

    callback(null, usr)
  })
}

exports.localStrategy = new LocalStrategy((username, password, done) => {
  client.auth(username, password, (err, token) => {
    if (err) {
      return done(null, false, { message: 'username and/or password not found' })
    }

      client.findUser(username, (err, user) => {
        if (err) {
          return done(null, false, { message: `an error ocurred ${err.message}` })
        }

        user.token = token
        return done(null, user)
    })
  })
})

exports.facebookStrategy = new FacebookStrategy({
  clientID: config.auth.facebook.clientID,
  clientSecret: config.auth.facebook.clientSecret,
  callbackURL: config.auth.facebook.callbackURL,
  profileFields:[ 'id', 'displayName', 'email', 'photos' ]
}, function (accessToken, refreshToken, profile, done) {
  let userProfile = {
    username: profile._json.id,
    name: profile._json.name,
    email: profile._json.email,
    profile_image: profile._json.picture.data.url,
    birthday: profile._json.birthday,
    gender: profile._json.gender,
    facebook: true
  }

  findOrCreate(userProfile, (err, user) => {
    if (err) return done(err)

    jwt.sign({ userId: user.username }, config.secret, {}, (e, token) => {
      if (e) return done(err)

      user.token = token

      return done(null, user)
    })
  })
})

// exports.twitterStrategy = new TwitterStrategy({
//     consumerKey: config.auth.twitter.consumerKey,
//     consumerSecret: config.auth.twitter.consumerSecret,
//     callbackURL: config.auth.twitter.callbackURL,
//     profileFields:['id', 'displayName', 'profile_image_url']
//   }, function(token, tokenSecret, profile, done) {
//       let userProfile = {
//         username: profile._json.id_str,
//         name: profile._json.name,
//         email: 'pending',
//         profile_image: profile._json.profile_image_url,
//         birthday: profile._json.birthday,
//         gender: profile._json.gender,
//         twitter: true
//       }

//       findOrCreate(userProfile, (err, user) => {
//         if (err) return done(err)

//         jwt.sign({ userId: user.username }, config.secret, {}, (e, token) => {
//           if (e) return done(err)

//           user.token = token

//           return done(null, user)
//         })
//       })
//   }
// )

exports.serializeUser = function (user, done) {
  return done(null, {
    username: user.username,
    token: user.token
  })
}

exports.deserializeUser = function (user, done) {
  client.getUsername(user.username, (err, usr) => {
    if (err) return done(err)

    usr.token = user.token
    return done(null, usr)
  })
}
