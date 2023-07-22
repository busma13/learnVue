const app = Vue.createApp({
  //data, functions, template
  // template: "<h2>I am the template</h2>"
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    // changeTitle(title) {
    //   this.title = title;
    // },
  },
});

app.mount("#app");
