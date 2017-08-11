const express = require('express');
const vueServerRenderer = require('vue-server-renderer');
const axios = require('axios');
const fs = require('fs');
const createApp = require('./public/js/app');

const app = express();
app.use(express.static('public'));

const template = fs.readFileSync('./template.html', 'utf-8');
const renderer = vueServerRenderer.createRenderer({ template });

app.get('/', (req, res) => {

  axios.get('https://api.github.com/search/repositories?q=vue&sort=stars')
    .then(({ data }) => {

      const context = { repos: data.items }
      const app = createApp(context)

      renderer.renderToString(app, (error, html) => {
        res.send(html);
      })
    })
})

app.listen(3000);