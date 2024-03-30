import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      users: []
    }
  },

	actions: {
    getUsers() {
      const url = "https://jsonplaceholder.typicode.com/users";
			fetch(url).then(async (response) => {
        if (response.ok) {
          this.users = await response.json();
        } else {
          this.users = [];
        }
      });
    }
  },
})
