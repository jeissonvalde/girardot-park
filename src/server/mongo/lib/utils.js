'use strict'

const hashJS = require('hash.js')
const Hashids = require('hashids')

const utils = {
  extractTags,
  encrypt,
  normalize,
  normalizePhone,
  encryptNumeric
}

function extractTags (text) {
  if (text == null) return []

  let matches = text.match(/#(\w+)/g)

  if (matches === null) return []

  matches = matches.map(normalize)

  return matches
}

function normalize (text) {
  text = text.toLowerCase()
  text = text.replace(/#/g, '')
  return text
}

function normalizePhone (number) {
  number = number.replace(/[\s, -]/g, '')
  return number
}

function encrypt (password) {
  let encoded = hashJS.sha256()
                      .update(password)
                      .digest('hex')

  return encoded
}

function encryptNumeric (integer) {
  if (!integer) return ''
  const hashid = new Hashids()
  let hex = hashid.encodeHex(integer)

  return hex
}

module.exports = utils
