'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema
let email_match = /@/


// User
const UserSchema = Schema({
  cc: Number,
  name: { type: String, required: 'we need your name' },
  email: { type: String, match: email_match },
  passwd: String,
  createdAt: { type: Date, default: new Date() },
  exposedId: String,
  facebook: Boolean,
  idSocial: Number,
  profile_image: String
})

module.exports = mongoose.model('User', UserSchema)
