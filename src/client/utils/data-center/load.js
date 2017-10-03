'use strict'

import axios from 'axios'


// Load user data
async function auth (ctx, next) {
  let user

  try {
    user = await axios.get('/whoami').then(res => res.data)

    if (user) {
      ctx.auth = user
    } else {
      ctx.auth = []
    }

    next()
  } catch (e) {
    console.log(e)
  }
}


export default {
  auth
}
