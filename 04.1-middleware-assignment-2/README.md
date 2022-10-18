Assignment 2: Middleware

1. Create a npm project and install Express.js (Nodemon if you want)
    - `npm init`
    - `npm install nodemon --save-dev` : installing nodemon in development.
    - `npm install express --save`: installing express in production.
1. Create an Express.js app which funnels the requests through 2 middleware functions that log something to the console and return one response.
1. Handle requests to "/" and "/users" such that each request only has one handler/middlewre that does something with it (e.g., send dummy response).