## Description

A backend server to host the website for CSES: a UCSD student organization

## Contributing

Workflow for new features of the website will be implemented via the GitHub issue tracker.
If the feature is big, open an issue first for discussion.

Whenever possible, please make a pull request with the implementation instead of just requesting it.

### Running it locally

#### Requirements

- [Node.js](https://nodejs.org/) (latest)
- [Yarn](https://yarnpkg.com/)

> **Note:** On Windows, you might need to install Bash commands (e.g. via [git-scm](https://git-scm.com/downloads) or via [linux bash shell](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/))

> **Note:** To install Node.js and Yarn on a windows machine, head over to these two websites and then follow the instructions under the 'Windows' section: ([Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/en/docs/install#windows-stable))


### Development mode

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

### Production mode

In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/crsandeep/simple-react-full-stack

# Go inside the directory
cd simple-react-full-stack

# Install dependencies
yarn (or npm install)

# Start development server
yarn dev (or npm run dev)

# Build for production
yarn build (or npm run build)

# Start production server
yarn start (or npm start)
```

## Contributors

- Alexandra Michael 
- Jining Song
- Lulu Zhu
- Niyonika Sheth 
- Saurabh Kanhegaonkar
