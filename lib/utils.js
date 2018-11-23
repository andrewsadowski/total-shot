const fs = require('fs');
const path = require('path');
const os = require('os');
const mkdirp = require('mkdirp');
const Url = require('url-parse');

const getHomeDir = () => {
  return os.homedir();
};

const getUserDesktopPath = () => {
  const homeDir = getHomeDir();
  const desktop = path.join(homeDir, 'Desktop');
  return desktop;
};

const checkOrMakeDir = () => {
  const desktopPath = getUserDesktopPath();
  const finalPath = path.join(desktopPath, '/total-shot/output/');
  mkdirp(finalPath, err => {
    if (err) console.error(err);
  });
  return finalPath;
};

const handleUrl = url => {
  const processedUrl = new Url(url);
  const host = processedUrl.hostname;
  const pathName = processedUrl.pathname;
  const finalHost = host.replace(/[.]/gi, '_');
  const pathFix = pathName.replace(/\//gi, '-');
  const pathEnd = pathFix.replace(/-$/, '');
  const finalUrl = finalHost + pathEnd;
  return finalUrl;
};

module.exports = {
  getHomeDir,
  getUserDesktopPath,
  checkOrMakeDir,
  handleUrl
};
