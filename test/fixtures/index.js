'use strict'

const uuid = require('uuid-base62')

const fixtures = {
  getImage () {
    return {
      description: 'This is an application developed and designed in #business model: business to business. #B2b #airConditioner #center.',
      url: ``,
      likes: 0,
      liked: false,
      user_id: uuid.uuid()
    }
  },

  getImages (n) {
    let images = []
    while (n-- > 0) {
      images.push(this.getImage())
    }

    return images
  },

  getUser (short) {
    if (short) {
      return {
        name: 'Emilio',
        lastname: '111111177782',
        email: `${uuid.uuid()}@airesgm.com`,
        username: 'a68f468e4fa68e',
        phone: '3111234560'
      }
    } else {
      return {
        cc: '111111177782',
        name: 'Emilio',
        email: `${uuid.uuid()}@airesgm.com`,
        passwd: uuid.uuid(),
        username: `323541265341`,
        phone: '3111234560',
        sex: 'male',
        facebook: true,
        idSocial: '31384333543520',
        profile_image: 'https://palpalpaplaapla.test/images/530574'
      }
    }
  },

  getArticle () {
    return {
      name: 'Aire acondicionado mini split - LG 14000BTU',
      price: 1200000,
      trademark: 'LG',
      color: 'negro',
      autorestart: true
    }
  },

  getBasketLastByUser (username) {
    return {
      basket: this.getShopping()
    }
  },

  getShopping () {
    return {
      articles: [
        this.getArticle(),
        this.getArticle(),
        this.getArticle()
      ],
      // username: 'a68f468e4fa68e',
      user: this.getUser(true)
    }
  }
}

module.exports = fixtures
