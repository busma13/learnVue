const app = Vue.createApp({
  //data, functions, template
  // template: "<h2>I am the template</h2>"
  data() {
    return {
      url: "https://www.thenetninja.co.uk",
      showBooks: true,
      books: [
        {
          title: "name of the wind",
          author: "Patrick Rothfuss",
          img: "assets/1.jpeg",
          isFav: true,
        },
        {
          title: "the way of kings",
          author: "Brandon Sanderson",
          img: "assets/2.jpeg",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "Brandon Sanderson",
          img: "assets/3.jpeg",
          isFav: true,
        },
      ],
      // title: "The Final Empire",
      // author: "Brandon Sanderson",
      // age: 45,
      // x: 0,
      // y: 0,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleIsFav(e) {
      const selectedBook = this.books.filter(
        (book) => book.title === e.target.firstChild.alt
      )[0];
      selectedBook.isFav = !selectedBook.isFav;
    },
    // handleEvent(e, data) {
    //   console.log(e, e.type);
    //   if (data) console.log(data);
    // },
    // handleMousemove(e) {
    //   this.x = e.offsetX;
    //   this.y = e.offsetY;
    // },
    // changeTitle(title) {
    //   this.title = title;
    // },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
