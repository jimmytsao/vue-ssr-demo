const Vue = require('vue/dist/vue.common.js')
const axios = require('axios')

Vue.component('list', {
  template: `
    <ol>
      <li v-for="repo in repos">
        <p>Stars: {{repo['stargazers_count']}}</p>
        <a v-bind:href="repo.html_url">{{ repo.full_name }}</a>
        <p>{{ repo.description }}</p>
      </li>
    </ol>
  `,
  props: ['repos']
})

const app = new Vue({
  el: '#app',
  template: `
    <div id="app">
      <h1>Most Starred Vue Repos</h1>
      <list v-bind:repos="repos"></list>
      <button v-on:click="fetchRepos">Load More</button>
    </div>
  `,
  data: {
    repos: []
  },
  computed: {
    lastRepoId () {
      return (this.repos.length > 0)
        ? this.repos[this.repos.length - 1]
        : undefined
    }
  },
  created () {
    this.fetchRepos()
  },
  methods: {
    fetchRepos () {
      const endpoint = 'https://api.github.com/search/repositories'
      axios
        .get(`${endpoint}?q=vue&sort=stars&since=${this.lastRepoId}`)
        .then(({ data }) => {
          this.repos = this.repos.concat(data.items)
        })
    }
  }
})
