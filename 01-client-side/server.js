const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res) =>
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>VueJS Demo</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div id="app"></div>
        <script src="/app.bundle.js"></script>
      </body>
    </html>
  `)
)

app.listen(port, () =>
  console.log(`Ready at http://localhost:${port}`)
)
