const webshot = require('node-webshot');
const fs = require('fs');

const urls = fs
  .readFileSync('url.txt')
  .toString()
  .split('\n');
for (i in urls) {
  console.log(urls[i]);
}

console.log(urls);

var options = {
  shotSize: {
    height: 'all'
  },
  renderDelay: 1500
  // userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6)' +
  //     ' AppleWebKit/531.21.20 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36'
};

for (i in urls) {
  let regEx = /^(http:\/\/|https:\/\/)/gi;
  let urlName = urls[i].replace(regEx, '');
  let finalUrl = urlName.replace('/', '-');
  console.log(finalUrl);
  webshot(urls[i], `output/${finalUrl}.jpeg`, options, function(err) {
    if (err) throw err;
  });
}
