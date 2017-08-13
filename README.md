# Vue SSR Demo
> A look at Vue.js and server side rendering.

### Overview

This project is broken up into two separate web applications:

__Project__ | __Description__
--- | ---
`01-client-side-rendering` | The web server sends an `index.html` file with every page request. The client fetches and renders the content.
`02-server-side-rendering` | The web server renders the Vue application, sending both HTML and state to the client side. The client's state is synced up.

### Local Setup

`npm install`

__Client Side Rendering App__

1. `npm run csr`
1. Go to `http://localhost:3000`

__Server Side Rendering App__

1. `npm run ssr`
1. Go to `http://localhost:3000`
