const createApp = require('./app');

const data = window.__INITIAL_STATE__;

const app = createApp(data);

app.$mount('#app');