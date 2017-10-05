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

// Load user's papers or publications
async function myfolder (ctx, next) {
  let papers
  let id = ctx.auth.exposedId

  try {
    papers = await axios.get(`/api/folder/${id}`).then(res => res.data)

    if (papers[0] != undefined) {
      ctx.auth.folder = papers
    } else {
      ctx.auth.folder = []
    }

    next()
  } catch (e) {
    console.log(e)
  }
}

export default {
  auth,
  myfolder
}
