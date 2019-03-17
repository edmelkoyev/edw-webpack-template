# edw-webpack-template
This is template for Node projects with webpack

## Install Webpack
`$ npm i webpack -D`  
`$ npm i webpack-cli -D`

### Launch of webpack
`$ npx webpack --mode=development`

By default, Webpack uses following expectations:
  - Source artefacts:  
  -- folder: src  
  -- file: index.js  
  -- mode: production  
  - Build artefacts:  
  -- folder: dist  
  -- file: main.js  

## Eslint
Install Eslint locally  
`$ npm install eslint --D`
Initialize Eslint
`$ ./node_modules/.bin/eslint --init`
or
`$ npx eslint --init`

## Babel 
Install Babel  
`$ npm i babel-core babel-preset-env -D`  
Install Babel loader for webpack
`$ npm i babel-loader@7 -D`  

## Install CSS
css-loader
`$ npm i css-loader -D`  
css-loader is intended to load css file conent. However it needs to be added to html page manually
or with style-loader

`$ npm i style-loader -D`
style-loader attaches loaded / provided styles to head of the page. It gets attached as explicit `<style>` node.

`$ npm i node-sass sass-loader -D`

## HTTP Server
Optionally we can install http-server  
`$ npm i http-server -D`

Launch of http server  
`$ npx http-server`

