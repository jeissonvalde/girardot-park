'use strict'

import sdkFacebook from './SDK-facebook'


require('./home')
// require('./auth')
// require('./folder')
// require('./paper')
// require('./paper-edit')

page()

// PLUGINS FOR SOCIAL NETWORKS
sdkFacebook()
require('./Firebase')
