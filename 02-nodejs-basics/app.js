const http = require("http");
const fs = require("fs");

// Event driven architecture (if request comes, execute this function)
const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);
  //   process.exit()

  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    // tells node that we have ended the response
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    // listens for events (e.g., data), receives a chunk of data
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      // buffer the chunks of data
      const parseBody = Buffer.concat(body).toString(); // key-value pair
      const message = parseBody.split("=")[1];
      // redirect back to "/" and creating a file
      fs.writeFileSync("message.txt", message);
    });

    res.statusCode = 302; // 302 is for redirect
    res.setHeader("Location", "/");
    return res.end();
  }

  // passing metadata to set the header type
  res.setHeader("Content-Type", "text/html");
  // write data to response
  res.write("<html>");
  res.write("<head><title>My FIrst Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server</h1></body>");
  res.write("</html>");
  // tells node that we have ended the response
  res.end();
});

server.listen(3000);
