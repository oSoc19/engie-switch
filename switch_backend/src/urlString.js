let regex = /^data:image\/[\w+]+;base64,([\s\S]+)/

function toBytes(urlString) {
  let matches = urlString.match(regex)
  if(matches) {
    return Buffer.from(matches[1], 'base64')
  }
}

function toUrlString(bytes) {
  // TODO choose between png and jpeg
  return 'data:' + 'image/png' + ';base64,' + bytes.toString('base64')
}

module.exports = {
  toBytes,
  toUrlString,
}

//TEST
//let content = require('fs').readFileSync('/home/axtux/Downloads/osoc/pics/5.png')
//console.log(toUrlString(content));

//require('fs').writeFileSync('test.png', toBytes(b64))
