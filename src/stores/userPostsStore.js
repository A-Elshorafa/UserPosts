import { defineStore, acceptHMRUpdate } from 'pinia'

export const userPostsStore = defineStore('userPostsStore', {
  state: () => {
    return {
      posts: []
    }
  },

	actions: {
    getPosts() {
      const url = "https://jsonplaceholder.typicode.com/posts";
			fetch(url).then(async (response) => {
        if (response.ok) {
          this.posts = await response.json();
        } else {
          this.posts = [];
        }
      });
    }
  },
})


if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(userPostsStore, import.meta.hot))

