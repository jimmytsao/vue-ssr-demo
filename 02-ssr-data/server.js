const express = require('express')
const path = require('path')
const axios = require('axios')
const port = process.env.PORT || 3000
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use((_req, res) =>
  axios.get('https://api.github.com/search/repositories?q=vue&sort=stars')
    .then(({ data }) => {
      const json = {
        repos: data.items
      }
      res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>VueJS Demo</title>
          <link rel="stylesheet" href="/styles.css" />
          <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
        </head>
        <body>
          <div id="app">
            <h1>Most Starred Vue Repos</h1>
            <list v-bind:repos="repos"></list>
            <button v-on:click="fetchRepos">Load More</button>
          </div>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(json)}
          </script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.16.2/axios.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.2/vue.min.js"></script>
          <script src="/app.js"></script>
        </body>
      </html>
      `)
    })
)

app.listen(port, () =>
  console.log(`Ready at http://localhost:${port}`)
)
