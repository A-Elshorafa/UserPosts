<template>
    <div class="flex flex-col">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <PostCard
                v-for="post in posts.slice((page - 1) * 10, page * 10)"
                :postId="post.id" 
                :postTitle="post.title"
                :userName="getUserData(post.userId).name" 
                :userPhone="getUserData(post.userId).phone" 
            />
        </div>
        <Paginator :items="posts" :itemsPerPage="10" :onChangePageNumber="handleOnChangePageNumber"/>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useUsersStore } from '@/stores/useUsersStore'
import { userPostsStore } from '@/stores/userPostsStore'

let page = ref(1);
const usersStore = useUsersStore()
const postsStore = userPostsStore()

postsStore.getPosts();
usersStore.getUsers();

const posts = computed(() => postsStore.posts);

const users = computed(() => usersStore.users);

function getUserData(userId) {
    return users.value.find? users.value.find(usr => usr.id === userId) : {};
}

function handleOnChangePageNumber(currentPage) {
    page.value = currentPage;
}

</script>
