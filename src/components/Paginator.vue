<template>
    <div>
      <div v-for="(item, index) in paginatedItems" :key="index">
        <!-- Render your item component or HTML for the item here -->
        <div>{{ item.name }}</div> <!-- Example, adjust according to your item structure -->
      </div>
      <div class="flex justify-between mt-6">
        <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </template>
  
<script setup>
    import { ref, computed, defineProps } from 'vue';
    const props = defineProps({
      items: Array,
      itemsPerPage: Number,
      onChangePageNumber: Function,
    });

    let currentPage = ref(1);
    
    const totalPages = computed(() => {
        return Math.ceil(props.items.length / props.itemsPerPage);
    });

    function nextPage() {
        if (currentPage.value < totalPages.value) currentPage.value++;
        if (props.onChangePageNumber) {
            props.onChangePageNumber(currentPage.value);
        }
    }
    
    function prevPage() {
        if (currentPage.value > 1) currentPage.value--;
        if (props.onChangePageNumber) {
            props.onChangePageNumber(currentPage.value);
        }
    }
</script>