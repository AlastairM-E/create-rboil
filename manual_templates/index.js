const packageJson = `{
    "name": "${nameOfFolder}",
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT",
    "devDependencies": {
      "@babel/core": "^7.8.4",
      "@babel/plugin-syntax-dynamic-import": "^7.8.3",
      "@babel/plugin-transform-runtime": "^7.8.3",
      "@babel/preset-env": "^7.8.4",
      "@babel/preset-react": "^7.8.3",
      "babel-loader": "^8.0.6",
      "clean-webpack-plugin": "^3.0.0",
      "create-rboil-utils": "^1.1.0",
      "css-loader": "^3.4.2",
      "file-loader": "^5.1.0",
      "html-loader": "^0.5.5",
      "html-webpack-plugin": "^3.2.0",
      "jest": "^25.1.0",
      "mini-css-extract-plugin": "^0.9.0",
      "node-sass": "^4.13.1",
      "sass-loader": "^8.0.2",
      "style-loader": "^1.1.3",
      "webpack": "^4.41.6",
      "webpack-cli": "^3.3.11",
      "webpack-dev-server": "^3.10.3",
      "webpack-merge": "^4.2.2",
      "@testing-library/react": "^9.4.1"
    },
    "dependencies": {
      "react": "^16.12.0",
      "react-dom": "^16.12.0"
    },
    "scripts": {
      "start": "webpack-dev-server --config ./dev-scripts/webpack.dev.js --open",
      "build": "webpack --config ./dev-scripts/webpack.prod.js", 
      "test" : "jest ./src"
    },
    "jest": {
      "transform": {
        "^.+\\\\.[t|j]sx?$": "babel-jest"
      }
    }
  }
`;

export {
    packageJson
};