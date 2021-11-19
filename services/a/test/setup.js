require('dotenv').config()

const secrets = require('config').get('secrets')
const someSecret = secrets.get('someSecret')

function init() {
  // setup something
  console.log('Some secret::', someSecret) // log to check
}

module.exports = init