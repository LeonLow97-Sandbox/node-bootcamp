const path = require("path");

// to get into the path of "app.js" which is the main module
module.exports = path.dirname(process.mainModule.filename);
