# NodeJS Basics

- [Full Node.js Reference](https://nodejs.org/dist/latest/docs/api/)
- [Node.js Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
- [Blocking and Non-Blocking Code](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

## How the Web Works?

- Receives Request from the client and sends a Response to the client.
- Request and Response is done through HTTP/HTTPS/
- HTTP (Hyper Text Transfer Protocol)
  - A protocol for transferring data which is understood by Browser and Server
- HTTPS (Hyper Text Transfer Protocol Secure)
  - HTTP + Data Encryption (during Transmission)
  - Launch a SSL Server
- Client => Request => Server => Response => Client

## Node.js Program Lifecycle

- Event Loop
  - Keeps on running as long as there are event listeners registered (req).
- To quit the server (not used):
  - `process.exit()`

## Streams and Buffers

- Stream --> Request Body Part 1 --> Request Body Part 2 --> Request Body Part 3 --> Request Body Part 4 --> Fully Parsed.
- Buffer: works with chunks of data
- `req.on()` allows us to listen to certain events
- `data` allows capturing a new chunk.

```js
  if (url === "/message" && method === "POST") {
    // listens for events (e.g., data), receives a chunk of data
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    // to work with the chunks
    req.on("end", () => {
      // buffer the chunks of data
      const parseBody = Buffer.concat(body).toString(); // key-value pair`
      console.log(parseBody);
      const message = parseBody.split("=")[1];
      // redirect back to "/" and creating a file
      fs.writeFileSync("message.txt", message);
    });
```

## Asynchronous Code

- Functions running in parallel with other functions are called asynchronous.
- Passing a function into another function in Node.js
- Node.JS runs asynchronously.
- Likely to get error `Cannot set headers after they are sent to the client`.

```js
const server = http.createServer((req, res) => {
```

## Export Functions

```js
module.exports = <function_name>  // function name;

const routes = require("./routes"); // importing the function that is in routes file
const server = http.createServer(routes);
```

- Exporting multiple items using `module.exports`

```js
module.exports = {
  handler: <function_name>,
  someText: "Some hard coded text"
}

// another way
module.exports.handler = <function_name>
module.exports.someText = "Some hard coded text"

// another way (omit the "module" word)
exports.handler = <function_name>
exports.someText = "Some hard coded text"

const server = http.createServer(routes.handler);
```
