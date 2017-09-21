# create-react-app
React / Redux / Gulp / Babel / ES6 Boilerplate

## Table of Contents

- [Quick Start](#quick-start)
- [Project description](#project-description)
- [Gulp configuration](#gulp-configuration)
- [The possibilities of the project](#the-posibilities-of-the-project)
- [Future updates](#future-updates)
  - [Version 1.1.0](#version-1.1.0)
  - [Version 1.2.0](#version-1.2.0)
  - [Version 1.3.0](#version-1.3.0)
  
## Quick Start

To download the project, you need to clone it first.

``
git clone https://github.com/Beraliv/react-create-app
``

After that, you need to install all dependencies.
It will create `node_modules` folder.

``
npm i
``

Next you need to install `gulp` globally. 

As far as the project uses new functionality of version 4, you should specify the version you download.

``
npm i -g github:gulpjs/gulp#4.0
``

Finally, you need to start the project.

``
gulp start
``

## Project description

The project consists of:

* [React](https://facebook.github.io/react/) library.
* [Redux](http://redux.js.org/) Framework.
* [Gulp](https://github.com/gulpjs/gulp/tree/4.0) task runner (version 4.0).
* [Babel](https://babeljs.io/) for supporting ES6.
* [ES6](https://babeljs.io/learn-es2015/) is update to the language (2015).
* [Less](http://lesscss.org/) dynamic stylesheet.
* Supports [Redux DevTools](https://github.com/gaearon/redux-devtools) for monitoring redux store.


## Gulp configuration

### `gulp clean`

It cleans the `dist` folder for running a task again

### `gulp build`

It put all files to `dist` folder and prepare for running a website in a development mode.

### `gulp build:prod`

It put all files to `dist` directory and prepare for running a website in a production mode.
The difference is that the files are minified and uglified before using them.

### `gulp default`

It combines `gulp clean` and `gulp build`.

### `gulp default:prod`

It combines `gulp clean` and `gulp build:prod`.

### `gulp test`

It tests the files from `specs` folder.

NB: currently is not supported!

### `gulp watch`

Look after changes and rebuild the project.

### `gulp start`

It combines `gulp clean`, `gulp build`, `gulp watch` of project files, 
starts the server on `localhost:3000` and open the web page.

## Future updates

### Version 1.1.0

* Improve build tasks:
  * Not bundling for dev mode
  * Browserify separate files to support `require` on every `js` files
* Add [ESLint](https://eslint.org/) support.

### Version 1.2.0

* Add `gulp test` working
* Add support for [Jest](https://facebook.github.io/jest/) test cases.

### Version 1.3.0

* Improve `gulp watch`
  * Incremental changes
  * Revision changes