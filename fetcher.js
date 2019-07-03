const request = require('request')
let input = process.argv.slice(2)
const url = input[0];
const path = input[1];
const fs = require("fs");
console.log(url, path);

const fetch = function(url, path) {
  request(url, (error, response, body) => {
    fs.writeFile(path, body, 'utf8', (err) => {
      if (err) throw err;
      console.log(`The file has been saved to ${path}`)
      console.log(body);
    })
  })
}
fetch(url,path);
