const os = require('os')

const cpus = os.cpus()

console.log('cpus: ', `${cpus.length} 核`)

const totalmem = os.totalmem()

console.log('totalmem: ', `${totalmem / 1024 / 1024 / 1024} GB`)
