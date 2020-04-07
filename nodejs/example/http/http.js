const http = require('http')
const querystring = require('querystring')

const port = 6789

const server = http.createServer((req, res) => {
  for (let key in req.headers) {
    console.log('http.createServer: ', `${key}: ${req.headers[key]}`)
  }

  res.setHeader('X-1', 1)

  res.writeHead(200, {
    'X-2': '2',
  })

  res.end('Hello, World')
})

server.on('error', (err) => {
  console.error('error: ', err)
})

server.listen(port, (res) => {
  console.log(`Server running at: http://localhost:${port}/`)
})

http.get(`http://localhost:${port}/`, (res) => {
  console.log(`状态码: ${res.statusCode}`)
  console.log(`响应头: ${JSON.stringify(res.headers)}`)

  res.setEncoding('utf8')

  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  })

  res.on('end', () => {
    console.log('res.on.end: ', data)
  })
})

const postData = querystring.stringify({
  content: '666666',
  cid: '348',
  mid: '8837',
})

const options = {
  // protocol: 'https:',
  host: 'www.imooc.com',
  // port: '443',
  path: '/course/docomment',
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Length': postData.length,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'imooc_uuid=bbed39d2-7509-4900-a505-a37f2b15001c; imooc_isnew_ct=1570783208; zg_did=%7B%22did%22%3A%20%2216db9f9b24b855-0da3cf9ee4f347-1d3b6b54-1fa400-16db9f9b24c845%22%7D; imooc_isnew=2; adv_#globalTopBanner_2749=1581844945915; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1585913123; loginstate=1; apsid=VlOTlmMGFkZTA0MzFjYTA0MTdkZjU1YjYxZmIxNmUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjgzNzY3OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxNDkwMDc5NTQ1QHFxLmNvbQAAAAAAAAAAAAAAAAAAADViY2JiMmE1YTQ3MWNlNGYyYjM3OTgxZWJkMjFmYzRkMR2HXjEdh14%3DMj; last_login_username=1490079545%40qq.com; zg_f375fe2f71e542a4b890d9a620f9fb32=%7B%22sid%22%3A%201586187356132%2C%22updated%22%3A%201586188186208%2C%22info%22%3A%201585913123375%2C%22superProperty%22%3A%20%22%7B%5C%22%E5%BA%94%E7%94%A8%E5%90%8D%E7%A7%B0%5C%22%3A%20%5C%22%E6%85%95%E8%AF%BE%E7%BD%91%E6%95%B0%E6%8D%AE%E7%BB%9F%E8%AE%A1%5C%22%2C%5C%22Platform%5C%22%3A%20%5C%22web%5C%22%7D%22%2C%22platform%22%3A%20%22%7B%7D%22%2C%22utm%22%3A%20%22%7B%7D%22%2C%22referrerDomain%22%3A%20%22www.imooc.com%22%2C%22zs%22%3A%200%2C%22sc%22%3A%200%2C%22firstScreen%22%3A%201586187356132%2C%22cuid%22%3A%20%222FgMtEiLdXg%2C%22%7D; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1586188187; cvde=5e871d23c178a-31',
    'Host': 'www.imooc.com',
    'Origin': 'https://www.imooc.com',
    'Pragma': 'no-cache',
    'Referer': 'https://www.imooc.com/video/8837',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
  },
}

const req = http.request(options, (res) => {
  console.log(`状态码: ${res.statusCode}`)
  console.log(`响应头: ${JSON.stringify(res.headers)}`)

  res.setEncoding('utf8')

  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  })

  res.on('end', () => {
    console.log('res.on.end: ', data)
  })
})

req.on('error', (e) => {
  console.error(`请求遇到问题: ${e.message}`)
})

req.write(postData)

req.end()
