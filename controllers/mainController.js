const path = require("path");

let mainController = {
  index: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/home.html"));
  },
  about: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/about.html"));
  },
};

module.exports = mainController;
