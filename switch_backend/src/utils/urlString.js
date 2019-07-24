let regex = /^data:image\/[\w+]+;base64,([\s\S]+)/

function toBytes(urlString) {
  let matches = urlString.match(regex)
  if(matches) {
    return Buffer.from(matches[1], 'base64')
  }
}

/*
 * Takes buffer and return string
 * Only detects png, jpeg and svg
 * Return undefined if no image or unknown format
 */
function toUrlString(bytes) {
  bytes = Buffer.from(bytes)
  if(!bytes || bytes.length < 10) {
    return;
  }
  let head = bytes.toString('hex', 0, 10)
  let type;

  if(head.substring(0, 4) == 'ffd8') {
    type = 'image/jpeg';
  }
  if(head.substring(0, 16) == '89504e470d0a1a0a') {
    type = 'image/png';
  }
  if(head.substring(0, 8) == '3c737667'
    || head.substring(0, 10) == '3c3f786d6c'
  ) {
    type = 'image/svg+xml';
  }
  if(type) {
    return 'data:' + type + ';base64,' + bytes.toString('base64')
  } else {
    console.log('unknown head: ', head)
  }
}

module.exports = {
  toBytes,
  toUrlString,
}

/* Test
let content = require('fs').readFileSync('PATH_TO_IMAGE')
console.log(toUrlString(content));
//*/

/* Test
let b64 = 'IMAGE_BASE_64'
require('fs').writeFileSync('test.png', toBytes(b64))
//*/
