'use strict'

const test = require('ava')
const utils = require('../src/server/mongo/lib/utils')
const Db = require('../src/server/mongo/lib/db')
const fixt = require('./fixtures')

let options = {
  name: 'testecoparque',
  setup: true
}

const db = new Db(options)

// test.beforeEach('setup database', async t => {
//   const db = new Db(options)
//   t.context.db = db
// })

test('save user', async t => {
  t.is(typeof db.saveUser, 'function', 'saveUser is a function')

  let user = fixt.getUser()
  let passPlain = user.passwd
  user.passwd = utils.encrypt(user.passwd)
  user.cc = await utils.encryptNumeric(user.cc)
  user.phone = await utils.encryptNumeric(user.phone)
  let created = await db.saveUser(user)

  console.log(created)
  t.is(created.name, user.name)
  t.is(created.email, user.email)
  t.is(created.cc, user.cc)
  t.is(created.phone, user.phone)
  t.is(utils.encrypt(plainPassword), created.passwd)
  // t.is(typeof created.id, 'string')
  t.truthy(created.createdAt)
})
