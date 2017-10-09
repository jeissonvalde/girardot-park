'use strict'

const config = {
  client: {},
  auth: {
    facebook: {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: 'http://api.parquesgir.com/auth/facebook/callback'
    }
  },

  secret: process.env.PARQUESGIR_SECRET
}

if (process.env.NODE_ENV == 'test') {

  config.auth.facebook.callbackURL = 'http://parquesgir.test:3000/auth/facebook/callback'
}

module.exports = config
