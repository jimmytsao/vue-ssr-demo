# Vue SSR Demo
> A look at Vue.js and server side rendering.

### Overview

This project is broken up into three separate web applications:

__Project__ | __Description__
--- | ---
`01-client-side` | The web server sends an `index.html` file with every page request. The client fetches and renders the content.
`02-ssr-data` | The web server inserts a local JS object with the `index.html`. The client renders the page with the pre-fetched data.
`03-ssr-vue` | The web server renders the Vue application, sending both HTML and state to the client side. The client's state is synced up.

### Local Setup



__Client Side Application__

1. `npm install`
1. `npm start`

__SSR - Data Rendering__

1. `npm install`
1. `npm start`

__SSR - Vue Rendering__

1. `npm install`
1. `npm install -g webpack`
1. `webpack public/js/client-entry.js public/js/bundle.js`
1. `node server`