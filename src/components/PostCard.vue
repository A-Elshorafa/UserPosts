<template>
    <div class="flex flex-col items-start border-4 rounded-lg p-2">
        <div v-if="postTitle.length >= 45" class="text-start flex-1 font-medium">{{ getPostTitle(postTitle) }}
            <Button class="text-sm font-medium text-gray-600" @click="clickShowMore">{{isShowMoreClicked? 'show less' : 'show more'}}</Button>
        </div>
        <div v-else class="text-start flex-1 font-medium">{{ getPostTitle(postTitle) }}</div>
        <img class="w-full flex-1" :src="`https://picsum.photos/600/300/?image=${postId}`"/>
        <div class="flex flex-row items-center">
            <img class="w-8 h-8" src="/public/anonUser.svg"/>
            <div class="w-2"></div>
            <div class="flex flex-col items-start overflow-hidden w-full">
                <span class="truncate font-bold text-ellipsis overflow-hidden">{{ userName }}</span>
                <span class="truncate text-ellipsis overflow-hidden">{{ userPhone }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    postId: Number,
    userName: String,
    postTitle: String,
    userPhone: String
});

let isShowMoreClicked = ref(false);

function getPostTitle(postTitle) {
    if (postTitle.length > 45 && !isShowMoreClicked.value) {
        return postTitle.substring? postTitle.substring(0, 25).concat('... ') : postTitle
    }

    return postTitle;
}

function clickShowMore() {
    isShowMoreClicked.value = !isShowMoreClicked.value
}
</script>