const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

const axios = require('axios');
const vueServerRenderer = require('vue-server-renderer');
const renderer = vueServerRenderer.createRenderer();
const createApp = require('./public/app');

app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res) =>

  axios.get('https://api.github.com/search/repositories?q=vue&sort=stars')
  .then(({ data }) => {

    const context = { repos: data.items }
    const app = createApp(context)

    renderer.renderToString(app, (error, html) => {
      res.send(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <title>VueJS Demo</title>
            <link rel="stylesheet" href="/styles.css" />
          </head>
          <body>
            ${html}
            <script>
              window.__INITIAL_STATE__=${JSON.stringify(context)}
            </script>
            <script src="/client.bundle.js"></script>
          </body>
        </html>
      `)
    })
  })
)

app.listen(port, () =>
  console.log(`Ready at http://localhost:${port}`)
)
