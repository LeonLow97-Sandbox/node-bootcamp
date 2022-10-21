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
