var webshot = require('node-webshot');
const fs = require('fs');

const urls = fs.readFileSync('url.txt').toString().split('\n');
for (i in urls) {
    console.log(urls[i]);
}

console.log(urls)

var options = {
    shotSize: {
        height: 'all'
    },
    renderDelay: 1000
    // userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6)' +
    //     ' AppleWebKit/531.21.20 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36'
};

for (i in urls) {
    webshot(urls[i], `output/${i}.jpeg`, options, function (err) {
        if (err) throw err;
    });
}

// webshot('amazon.com', './amazon.png', function (err) {
//     if (err) return console.log(err);
//     console.log('OK');
// });