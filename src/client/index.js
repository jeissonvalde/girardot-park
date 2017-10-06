'use strict'

require('babel-polyfill')
import page from 'page'
import sdkFacebook from './SDK-facebook'


require('./home')
require('./auth')
require('./folder')
require('./paper')

page()

// PLUGINS FOR SOCIAL NETWORKS
sdkFacebook()
