const webshot = require("node-webshot");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const argv = require("yargs")
  .alias("f", "filePath")
  .usage("Usage: add a file path with the -f flag")
  .example('fullviewScreen -f "/absolute/path/to/file.txt"')
  .alias("o", "outputPath")
  .usage("Usage: Dictate the path you want the screenshots outputted to.")
  .example('fullviewScreen -o "/absolute/path/to/output"')
  .help("h").argv;

const { getUserDesktopPath } = require("./utils");

let filePath;
let outputPath;

if (argv.f && argv.o) {
  filePath = argv.f;
  outputPath = argv.o;
} else if (argv.f && !argv.o) {
  filePath = argv.f;
  outputPath = "./output/";
} else {
  filePath = "./url.txt";
  outputPath = "./output/";
}

const executeRequest = ((filePath, outputPath) => {
  const urls = fs
    .readFileSync(filePath)
    .toString()
    .split("\n");

  var options = {
    shotSize: {
      height: "all"
    },
    renderDelay: 2000
    // userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6)' +
    //     ' AppleWebKit/531.21.20 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36'
  };

  for (i in urls) {
    let regEx = /^(http:\/\/|https:\/\/)/gi;
    let finalReg = /\//g;
    let urlName = urls[i].replace(regEx, "");
    let finalUrl = urlName.replace(finalReg, "-");
    console.log(chalk.magenta(`Reading text file`));
    console.log(
      chalk.yellow.bold(
        `Writing ${finalUrl} to disc at: ${chalk.green.bold(
          path.join(getUserDesktopPath(), "output/")
        )}`
      )
    );
    webshot(urls[i], `output/${finalUrl}.jpeg`, options, function(err) {
      if (err) throw err;
    });
  }
})(filePath, outputPath);

module.exports = {
  executeRequest
};
