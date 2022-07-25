let apiUrl = "http://api.filhafirah.my.id/"
let app = Vue.createApp({
    data() {
      return {
        articles: {},
        about: {},
        markdown: null
      }
    },
    methods: {
      getArticleData() {
        axios
          .get(apiUrl+"article")
          .then((res) => {
            this.articles = res.data;
            console.log(res.data)
          })
          .catch((error) => {
            console.log(error);
          });
        },
        getAbout() {
          axios
            .get(apiUrl+"about/1")
            .then((res) => {
              this.about = res.data;
            })
      }
    },
    beforeMount() {
      this.getArticleData(),
      this.getAbout()
    }
  })
  app.mount('#app');