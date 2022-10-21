const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Saying Hello</title></head>");
    res.write("<body>");
    res.write("<h1>Hello Leon!</h1>");
    res.write(
      "<form action='/create-user' method='POST'><input type='text' name='username'><button type='submit'>Create User</button></form>"
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Saying Hello</title></head>");
    res.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      console.log(message);
    });
    res.statusCode = 302; // redirect
    res.setHeader("Location", "/users");
    return res.end();
  }

  // passing metadata to set the header type
  res.setHeader("Content-Type", "text/html");
  // write data to response
  res.write("<html>");
  res.write("<head><title>Not Found</title></head>");
  res.write("<body><h1>404 Page Not Found!</h1></body>");
  res.write("</html>");
  // tells node that we have ended the response
  res.end();
};

exports.handler = requestHandler;
