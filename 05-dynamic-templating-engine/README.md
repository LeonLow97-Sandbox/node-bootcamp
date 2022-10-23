## Objectives

- Managing Data (without a Database)
  - Share data in variables across different requests
- Render Dynamic Content in our Views
- Understanding Templating Engines

## Templating Engines

- HTMList Template
  - Node / Express Content
  - Templating Engines
  - Replaces Placeholders / Snippets with HTML Content
- Generate HTML File once done.
- Avaiable Templating Engines
  - EJS
    ```html
    <p><%= name %></p>
    ```
    - Uses normal HTML and plain JavaScript in your templates.
  - Pug (Jade)
    ```pug
    p #{name}
    ```
    - Use minimal HTML and custom template language
  - Handlebars
    ```
    <p>{{name}}</p>
    ```
    - Use normal HTML and custom template language.
- `npm install --save ejs pug express-handlebars`

## `.pug`

- [Official Pug Docs](https://pugjs.org/api/getting-started.html)
- To render template files, set in `app.js` in the default app:
  - `views`: the directory where the template files are located. E.g., `app.set("views", "./views")`
    - This defaults to the `views` directory in the application root directory.
  - `view engine`: the template engine to use.
    - For example, to use the Pug template engine: `app.set("view engine", "pug")`
- To create a route in `shop.js` to render the `shop.pug` file.

```js
router.get("/", (req, res, next) => {
  // render() method uses the default templating engine defined in app.js
  // already defined in app.js, so this will access views folder and look for .pug file
  res.render("shop");
});
```

- Passing data into pug using `shop.js`

```js
router.get("/", (req, res, next) => {
  // render() method uses the default templating engine defined in app.js
  // already defined in app.js, so this will access views folder and look for .pug file
  const products = adminData.products;
  // pass to shop.pug template with an object
  res.render("shop", { prods: products, docTitle: "Shop" });
});
```

- Receiving data in `shop.pug`

```js
if prods.length > 0
    ...
    // looping over prods
    each product in prods
else
    ...
```

## Handlebars templating engine

- cannot output logic into the template.
- can only use single outputs like boolean or values in the templating engine of handlebars unlike pug (can put if else logic in pug)

- Setting up `.hbs` templating engine

  ```js
  const expressHbs = require("express-handlebars");

  const app = express();

  app.set("view engine", "pug");
  app.engine(
    "hbs",
    expressHbs.engine({
      layoutsDir: "views/layouts/",
      defaultLayout: "main-layout",
      extname: "hbs",
    })
  ); // hbs templating engine
  ```

````

- use `{{{}}}` 3 brackets for a placeholder in `main-layout.hbs`.
- use `{{}}` 2 brackets to handle logic,

  - have to pass in this boolean value from node.js

  ```js
  {{if formsCSS}}

  {{/if}}
````

## EJS Templating Engine

- To input variables from node.js:

  ```js
    <%= pageTitle %>
  ```

- Similar to JavaScript syntax:

  ```js
    <% if (prods.length> 0) { %>
    ...
    <% } else { %>
      <h1>No Products Found!</h1>
    <% } %>
  ```

- Creating Partials (importing a layout), this way of importing can also be done for .hbs and .pug

  ```js
    <%- include('includes/head.ejs') %>
  ```

- Difference between using `<%= %>` and `<%- %>`:
  - `<%= %>` does not convert HTML code and just returns text. Prevents XSS attacks.
  - `<%- %>` converts HTML code to the browser.


