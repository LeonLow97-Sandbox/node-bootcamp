## Create `package.json` file

- Run `npm init`

## Setting Script Tags in `package.json`

- If it is a keyword for script tag like "start", then do `npm start`
- If it is a custom script tag like "start-server", then do `npm run start-server` (have to include keyword `run`)

```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js",
    "start-server": "node app.js"
  },
```

## npm Repository

- Install 3rd party packages
- `npm install nodemon`

|                                 Code                                 |            Description            |
| :------------------------------------------------------------------: | :-------------------------------: |
|                   `npm install nodemon --save-dev`                   |      Install for development      |
|                     `npm install nodemon --save`                     |      Install for production       |
| `npm install nodemon -g` <br> For Mac, `sudo npm install nodemon -g` | Install globally on local machine |

## Types of Errors

- Syntax Errors
  - Typo
- Runtime Errors
  - Code that breaks when it runs.
- Logical Errors
  - Use Debugger in VS Code.

## Debugging Node.js in VS Code

- [Debugging Node.js](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)

## Configure Debugger in VS Code

- Run => Add Configurations => `launch.json`
- Add "restart", "runtimeExecutable" and "console" for automatically refreshing debugger in VS Code ("like nodemon").
- Ensure nodemon is installed globally for this to work.
- Run => Start Debugging

```js
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/03-improved-workflow-and-debugging/routes.js",
            "restart": true,
            "runtimeExecutable": "nodemon",
            "console": "integratedTerminal"
        }
```


