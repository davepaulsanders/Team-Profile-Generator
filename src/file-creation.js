const fs = require("fs");

const folderExist = () => {
  if (fs.existsSync("dist")) {
    return true;
  } else {
    return false;
  }
};

const createFolder = () => {
  return new Promise((resolve, reject) => {
    fs.mkdirSync("dist", (err) => {
      if (err) {
        reject(err);
        return "Sorry, folder could not be created!";
      }
      resolve({
        ok: true,
        message: "dist folder created...",
      });
    });
  });
};
const createFile = (template) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", template, (err) => {
      if (err) {
        reject(err);
        return "File couldn't be created!";
      }
      resolve({
        ok: true,
        message: "index.html created in dist folder!",
      });
    });
  });
};

module.exports = { folderExist, createFolder, createFile };
