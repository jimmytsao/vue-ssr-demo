# Vue SSR Demo
> A look at Vue.js and server side rendering.

[Link to Presentation Deck](http://prezi.com/2h8fuft7udtp/?utm_campaign=share&utm_medium=copy)

### Overview

This project is broken up into two separate web applications:

__Project__ | __Description__ | __Demo Link__
--- | --- | ---
`01-client-side-rendering` | The web server sends an `index.html` file with every page request. The client fetches and renders the content. | [Demo](https://vue-ssr-demo-01.herokuapp.com/)
`02-server-side-rendering` | The web server renders the Vue application, sending both HTML and state to the client side. The client's state is synced up. | [Demo](https://vue-ssr-demo-02.herokuapp.com/)

### Local Setup

`npm install`

__Client Side Rendering App__

1. `npm run csr`
1. Go to `http://localhost:3000`

__Server Side Rendering App__

1. `npm run ssr`
1. Go to `http://localhost:3000`
