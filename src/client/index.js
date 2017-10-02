'use strict'

import page from 'page'
import sdkFacebook from './SDK-facebook'


require('./home')
require('./auth')

page()

// PLUGINS FOR SOCIAL NETWORKS
sdkFacebook()
