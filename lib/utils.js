const fs = require('fs');
const path = require('path');
const os = require('os');

const getHomeDir = () => {
  return os.homedir();
};

module.exports = {
  getHomeDir
};
