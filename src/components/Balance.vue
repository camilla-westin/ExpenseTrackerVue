<script setup>
import { defineProps } from "vue";

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="py-3">
    <h2 class="uppercase text-xs font-medium">Your balance</h2>
    <p class="text-xl font-semibold">{{ total }}$</p>
  </div>
</template>
