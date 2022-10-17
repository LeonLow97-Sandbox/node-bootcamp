const http = require("http");

const routes = require("./routes");

// Event driven architecture (if request comes, execute this function)
const server = http.createServer(routes.handler);

console.log(routes.someText);
//   console.log(req.url, req.method, req.headers);
//   process.exit()

server.listen(3000);
