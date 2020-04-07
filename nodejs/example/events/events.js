const events = require('events')

const {
  EventEmitter,
} = events

const myEventEmitter = new EventEmitter()

console.log('EventEmitter.defaultMaxListeners: ', EventEmitter.defaultMaxListeners)

// setMaxListeners 必须在超过之前设置

myEventEmitter.setMaxListeners(11)

// getMaxListeners

console.log('EventEmitter.getMaxListeners: ', myEventEmitter.getMaxListeners())

// addEventListener

myEventEmitter.on('play', (value) => {
  console.log(`${value} play 1`)
})

myEventEmitter.on('play', (value) => {
  console.log(`${value} play 2`)
})

myEventEmitter.on('play', (value) => {
  console.log(`${value} play 3`)
})

myEventEmitter.on('play', (value) => {
  console.log(`${value} play 4`)
})

myEventEmitter.on('play', (value) => {
  console.log(`${value} play 5`)
})

myEventEmitter.on('play', (value) => {
  console.log(`${value} play 6`)
})

myEventEmitter.on('play', (value) => {
  console.log(`${value} play 7`)
})

myEventEmitter.on('play', (value) => {
  console.log(`${value} play 8`)
})

myEventEmitter.once('play', (value) => {
  console.log(`${value} play 9`)
})

const play10 = (value) => {
  console.log(`${value} play 10`)
}

myEventEmitter.addListener('play', play10)

const play11 = (value) => {
  console.log(`${value} play 11`)
}

myEventEmitter.addListener('play', play11)

console.log('myEventEmitter.listenerCount: ', myEventEmitter.listenerCount('play'))

myEventEmitter.removeListener('play', play10)

console.log('myEventEmitter.listenerCount: ', myEventEmitter.listenerCount('play'))

// off v10.0.0

myEventEmitter.off('play', play11)

console.log('myEventEmitter.listenerCount: ', myEventEmitter.listenerCount('play'))

myEventEmitter.emit('play', 'a')

myEventEmitter.emit('play', 'b')

myEventEmitter.removeAllListeners('play')

myEventEmitter.emit('play', 'c')

const hasBeat = myEventEmitter.emit('beat', 'c')

console.log('hasBeat: ', hasBeat)

const hasFly = myEventEmitter.listeners('fly')

console.log('hasFly: ', hasFly, hasFly.length)
