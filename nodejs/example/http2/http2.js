const http2 = require('http2')
const fs = require('fs')

const port = 6789

/*
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
  -keyout passport.pem -out certificate.pem
*/

const server = http2.createSecureServer({
  key: fs.readFileSync('passport.pem'),
  cert: fs.readFileSync('certificate.pem'),
})

server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'text/html',
    ':status': 200,
  })

  stream.end('Hello, World')
})

server.on('error', (err) => {
  console.error(err)
})

server.listen(port, (res) => {
  console.log(`Server running at: http://localhost:${port}/`)
})

const client = http2.connect(`https://localhost:${port}/`, {
  ca: fs.readFileSync('certificate.pem'),
})

client.on('error', (err) => {
  console.error(err)
})

const req = client.request({
  ':path': '/',
})

req.on('response', (headers, flags) => {
  for (const name in headers) {
    console.log(`${name}: ${headers[name]}`)
  }
})

req.setEncoding('utf8')

let data = ''

req.on('data', (chunk) => {
  data += chunk
})

req.on('end', () => {
  console.log('end: ', data)
})

req.end()
