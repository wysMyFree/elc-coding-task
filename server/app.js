/**
 * The Server Can be configured and created here...
 *
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const data = require('./data')
const http = require('http')
const url = require('url')
const hostname = 'localhost'
const port = 3035

function search(value) {
  const resultArray = []
  if (value) {
    data.map((i) => {
      let nameArr = i.name.split(' ')
      nameArr.map((u) => {
        if (u.toLowerCase().startsWith(value.toLowerCase())) {
          resultArray.push(i)
        }
      })
    })
    return resultArray
  }
}

http
  .createServer(function (request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.writeHead(200, { 'Content-Type': 'application/json' })
    var query = url.parse(request.url, true).query
    var value = query.search ? query.search : 0
    response.end(JSON.stringify(search(value)))
  })
  .listen(port)

console.log(`[Server running on ${hostname}:${port}]`)
