require('dotenv').config()

const secrets = require('config').get('secrets')
const someSecret = secrets.get('someSecret')
const secretEndpoint = secrets.get('url')

function init() {
  // setup something
  console.log('Some secret::', someSecret) // log to check
  console.log('Some secret url::', secretEndpoint) // log to check
}

module.exports = init