# NodeJS Basics

## How the Web Works?

- Receives Request from the client and sends a Response to the client.
- Request and Response is done through HTTP/HTTPS/
- HTTP (Hyper Text Transfer Protocol)
  - A protocol for transferring data which is understood by Browser and Server
- HTTPS (Hyper Text Transfer Protocol Secure)
  - HTTP + Data Encryption (during Transmission)
  - Launch a SSL Server

## Node.js Program Lifecycle

- Event Loop
  - Keeps on running as long as there are event listeners registered (req).
- To quit the server (not used):
  - `process.exit()`

## Streams and Buffers

- Stream --> Request Body Part 1 --> Request Body Part 2 --> Request Body Part 3 --> Request Body Part 4 --> Fully Parsed.
- Buffer: works with chunks of data
