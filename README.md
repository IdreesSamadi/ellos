# Ellos

## Build Setup

```bash
# clone repository
$ git clone git@github.com:IdreesSamadi/ellos.git

# change to directory
$ cd ellos

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Dependencies

- Nuxt
- Vue
- bootwatch
- scss
- gsap

### Note

When running this application one may face with [Cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) problem. There are many ways to solve this here two of them is mentioned:

- install the [Allow-Control-Allow-Origin](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc?hl=en-US) chrome extension. it's very quick and easy way to solve the issue, however it's not recommended and might jeopardize your browser security. If you choose to go with this solution, make sure to turn it once you’re done.
- build your own proxy. This is recommended way to solve this problem. [read more here](https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9)
