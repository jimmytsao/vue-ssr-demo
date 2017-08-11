const Vue = require('vue/dist/vue.common.js')
const axios = require('axios')

const List = Vue.component('list', {
  template: `
    <ol>
      <li v-for="repo in repos">
        <p> Stars: {{repo['stargazers_count']}} </p>
        <a v-bind:href="repo['html_url']">{{repo['full_name']}}</a>
        <p>{{ repo.description }}</p>
      </li>
    </ol>
  `,
  props: ['repos']
})


const AppComponent = Vue.component('app-component', {
  template: `
    <div id="app">
      <h1>Most Starred Vue Repos</h1>
      <list v-bind:repos="repos"></list>
      <button v-on:click="loadMore">Load More</button>
    </div>
  `,
  props: ['repos', 'addRepos'],
  computed: {
    lastRepoId() {
      const lastRepo = this.repos[ this.repos.length - 1 ];

      return lastRepo.id;
    }
  },
  methods: {
    loadMore() {
      const base = 'https://api.github.com/search/repositories';
      const query = `?q=vue&sort=stars&since=${this.lastRepoId}`;

      axios.get(base + query)
        .then( ({ data }) => {
          const newRepos = data.items;

          this.addRepos(newRepos);
        })
    }
  }
})

const createApp = data => new Vue({
  template: `
    <app-component
      v-bind:repos="repos"
      v-bind:addRepos="addRepos"
    />
  `,
  data() {
    return data
  },

  // data() {
  //   return {
  //     repos: []
  //   }
  // },

  // created() {
  //   axios.get('https://api.github.com/search/repositories?q=vue&sort=stars')
  //     .then(({ data }) => {
  //       this.repos = this.repos.concat(data.items);
  //     })
  // },

  methods: {
    addRepos(newRepos) {
      this.repos = this.repos.concat(newRepos)
    }
  }
})

module.exports = createApp