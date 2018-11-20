const fs = require("fs");
const path = require("path");
const os = require("os");

const getHomeDir = () => {
  return os.homedir();
};

const getUserDesktopPath = () => {
  const homeDir = getHomeDir();
  const desktop = path.join(homeDir, "Desktop");
  return desktop;
};

module.exports = {
  getHomeDir,
  getUserDesktopPath
};
