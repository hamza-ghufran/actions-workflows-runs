const { task } = require('gulp')
const argv = require('yargs').argv
const concurrently = require('concurrently')

const SERVICES = ["a", "b"]

function getServices() {
    if (argv.services === undefined || !argv.services) {
        return SERVICES
    }

    return argv.services.split(",")
}

task('install', function(done) {
    const services = getServices()
    const runs = []
    services.forEach(s => runs.push(`npm i --prefix services/${s}`))

    concurrently(runs).then(() => {
        done()
    }, (err) => {
        done(err)
    })
})

task('test', function(done) {
    const services = getServices()
    const tests = []

    services.forEach(s => tests.push(`npm run test --prefix services/${s}`))

    concurrently(tests).then(() => {
        done()
    }, (err) => {
        done(err)
    })
})

exports.default = (cb) => cb()