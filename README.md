# BrewYah
The server that runs it all

## Install independencies
1. Run `npm install`
1. Run `npm install -g db-migrate`

## Linking other local dev dependencies to the server
1. `cd` to their folder (let's say `taproom`), then run `npm link`
1. `cd` back to `brewyah`, then run `npm link taproom`
1. After complete, run `npm start` - it should use the locally linked dependency (such as `taproom` or `braumeister`).

## The development server
1. Run `npm start` then go to `http://localhost:1337`

### But what is it?
It's the server running with an Webpack server that will watch the files from the UI dependencies, rebuild upon change, and perform a hot module replacement on any browser tabs open. It's a single unified webpack bundle/configuration and allows us to run the entire stack during development instead of developing in a silo. 

## Technical Dependencies
### [Koa](https://www.npmjs.com/package/koa)
### [MongoDB](https://www.npmjs.com/package/mongodb)
## Collections
### [Beer](./docs/collection/beer.md)
