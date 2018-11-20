# total-shot

This application parses a text file with URLs, separated by linebreaks, and takes fullview screenshots of them. The screenshots are outputted to a output/ directory (by default a total-shot/ directory is created on your desktop).

## Getting Started

Compile all URLs you want screenshots of into a text file, separated by line-breaks and name the file url.txt. Make sure there aren't empty lines!

### Prerequisites

Recent version of NodeJS installed and configured (https://nodejs.org/en/download/). LTS version is sufficient. PhantomJS is required, if it is not installed, a pre-built version will be installed on `npm install`

### Installing

Install Depenencies by typing:

```bash
npm install -g total-shot
```

### Running

In order to feed the appropriate URLs into the program, provide a .txt file with all URLs separated by line breaks. Feed the absolute path to that file to get the full-page screenshots!

Run program by typing:

```bash
totalShot -f '/absolute/path/to/text.txt'
```

Optionally, you can add an output directory of your choice with -o

```bash
totalShot -f '/absolute/path/to/text.txt' -o '/absolute/path/to/output'
```

### Output

By default, a directory called 'total-shot' will be created on your Desktop, with a directory called 'output' containing full-page screenshots of the urls provided.
