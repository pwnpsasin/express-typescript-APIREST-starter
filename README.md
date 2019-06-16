# express-typescript-APIREST-starter
API REST in Express 4 and TypeScript with the controllers as the JS Class - skeleton

Inspired by:
 - https://github.com/Microsoft/TypeScript-Node-Starter.git
 - https://github.com/mwanago/express-typescript.git

## Require

- Node.JS 10.16.0 or 11.15.0 or 12.4.0
- TypeScript 3.5.1
- Express 4.17.1

## Fast run

Follow steps:
- yarn 
- yarn config set scripts-prepend-node-path true
- yarn build
- yarn serve
- open http://localhost:3000/ or e.g. request GET - http://localhost:3000/posts

## Project Structure
The most obvious difference in a TypeScript + Node project is the folder structure.
In a TypeScript project, it's best to have separate _source_  and _distributable_ files.
TypeScript (`.ts`) files live in your `src` folder and after compilation are output as JavaScript (`.js`) in the `dist` folder.
The `test` and `views` folders remain top level as expected.

The full folder structure of this app is explained below:

> **Note!** Make sure you have already built the app using `yarn run build`

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **.vscode**              | Contains VS Code specific settings                                                            |
| **dist**                 | Contains the distributable (or output) from your TypeScript build. This is the code you ship  |
| **node_modules**         | Contains all your npm dependencies                                                            |
| **src**                  | Contains your source code that will be compiled to the dist dir                               |
| **src/controllers**      | Controllers define functions that respond to various http requests                            |
| **src/models**           | Models define schemas that will be used in storing and retrieving data from DB/API            |
| **src/middlewares**      | Contains all middleware's functions                                                           |
| **src/public**           | Static assets that will be used client side                                                   |
| **src/types**            | Holds .d.ts files not found on DefinitelyTyped.                                               |
| **src**/server.ts        | Entry point to your express app                                                               |
| **src**/app.ts           | Your express app - main class                                                                 |
| **views**                | Views define how your app renders on the client. In this case we're using pug                 |
| .env.example             | API keys, tokens, passwords, database URI. Clone this, but don't check it in to public repos. |
| .copyStaticAssets.ts     | Build script that copies images, fonts, and JS libs to the dist folder                        |
| jest.config.js           | Used to configure Jest                                                                        |
| package.json             | File that contains npm dependencies as well as                                                |
| tsconfig.json            | Config settings for compiling server code written in TypeScript                               |
| tsconfig.tests.json      | Config settings for compiling tests written in TypeScript                                     |
| tslint.json              | Config settings for TSLint code style checking                                                |

### Running the build
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.
This is nice because most JavaScript tools have easy to use command line utilities allowing us to not need grunt or gulp to manage our builds.
If you open `package.json`, you will see a `scripts` section with all the different scripts you can call.
To call a script, simply run `yarn run <script-name>` from the command line.
You'll notice that npm scripts can call each other which makes it easy to compose complex builds out of simple individual build scripts.
Below is a list of all the scripts this template has available:

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Does the same as 'npm run serve'. Can be invoked with `npm start`                                 |
| `build`                   | Full build. Runs ALL build tasks (`build-sass`, `build-ts`, `tslint`, `copy-static-assets`)       |
| `serve`                   | Runs node on `dist/server.js` which is the apps entry point                                       |
| `watch-node`              | Runs node with nodemon so the process restarts if it crashes. Used in the main watch task         |
| `watch`                   | Runs all watch tasks (TypeScript, Sass, Node). Use this if you're not touching static assets.     |
| `test`                    | Runs tests using Jest test runner                                                                 |
| `doc`                     | Runs build the documentation - `dist/public/docs/api/`                                              |
| `clean`                   | Clean folder `dist/`                                                                                |
| `watch-test`              | Runs tests in watch mode                                                                          |
| `build-ts`                | Compiles all source `.ts` files to `.js` files in the `dist` folder                               |
| `watch-ts`                | Same as `build-ts` but continuously watches `.ts` files and re-compiles when needed               |
| `build-sass`              | Compiles all `.scss` files to `.css` files                                                        |
| `watch-sass`              | Same as `build-sass` but continuously watches `.scss` files and re-compiles when needed           |
| `tslint`                  | Runs TSLint on project files                                                                      |
| `copy-static-assets`      | Calls script that copies JS libs, fonts, and images to dist directory                             |
| `debug`                   | Performs a full build and then serves the app in watch mode                                       |
| `serve-debug`             | Runs the app with the --inspect flag                                                              |
| `watch-debug`             | The same as `watch` but includes the --inspect flag so you can attach a debugger                  |
