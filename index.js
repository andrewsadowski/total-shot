const webshot = require('node-webshot');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const argv = require('yargs')
  .alias('f', 'filePath')
  .usage('Usage: add a file path with the -f flag')
  .example('shootIt -f "/absolute/path/to/file.txt"')
  .alias('o', 'outputPath')
  .usage(
    'Usage: Dictate the path you want the screenshots outputted to.'
  )
  .example('shootIt -o "/absolute/path/to/output"')
  .help('h').argv;

let filePath;
let outputPath;

if (argv.f && argv.o) {
  filePath = argv.f;
  outputPath = argv.o;
} else {
  filePath = './url.txt';
}

const urls = fs
  .readFileSync(filePath)
  .toString()
  .split('\n');

var options = {
  shotSize: {
    height: 'all'
  },
  renderDelay: 2000
  // userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6)' +
  //     ' AppleWebKit/531.21.20 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36'
};

for (i in urls) {
  let regEx = /^(http:\/\/|https:\/\/)/gi;
  let finalReg = /\//g;
  let urlName = urls[i].replace(regEx, '');
  let finalUrl = urlName.replace(finalReg, '-');
  console.log(finalUrl);
  webshot(urls[i], `output/${finalUrl}.jpeg`, options, function(err) {
    if (err) throw err;
  });
}
