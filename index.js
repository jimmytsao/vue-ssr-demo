// Used for heroku deployment
if (process.env.SERVER_SIDE_RENDER === 'true') {
  require('./02-server-side-rendering/server')
} else {
  require('./01-client-side-rendering/server')
}