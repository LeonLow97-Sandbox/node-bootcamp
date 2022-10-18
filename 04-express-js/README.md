## Alternative to Express.js

- Vanilla Node.js
- Adonis.js
- Koa
- Sails.js
- Express.js (Most popular)

## Adding Middleware

- Passing a request through several functions/handlers instead of having one big chunk of code in a file to handle the request
- `next()`: Allows the request to continue to the next middleware in line.
  - only applies to middlewares (when you want to move from middleware to middleware). otherwise, it will just reach the first valid middleware function.
- `(req, res, next) => {...}`
- Send back the response at the end.
- `app.use()`
- A request goes through the file from top to bottom.

```js
// will handle every request in the middleware
app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});
```

## `res.send()`

- `res.send()` is response that is handled by ExpressJS
- `res.send(<h1>Hello from express!</h1>)`
- If don't call `next()`, then the function ends there.

## `app.listen(3000)`

- `app.listen` (shorter form of listening to a port)
  ```js
  // app.listen() is equivalent to:
  const server = http.createServer(app);
  server.listen(3000);
  ```

## Middleware: Handling Different Routes

- The request goes through the file from top to bottom.
- It will reach the route "/add-product" first and if other routes were requested, it will direct the user to "/" route.
- Don't add `next()` if there is another response after the middleware function, this results in an error (multiple header sent to client).

```js
app.use("/add-product", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Add Product Page</h1>");
  // next() // don't want to add next() here because it will send another response res.send() (error multiple headers)
});

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello From Express!</h1>");
});
```
