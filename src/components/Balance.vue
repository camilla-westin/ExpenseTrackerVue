<script setup>
const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="py-3">
    <h2 class="uppercase text-xs font-medium">Ditt saldo</h2>
    <p class="text-xl font-semibold">{{ total }} SEK</p>
  </div>
</template>
