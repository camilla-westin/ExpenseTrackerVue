<script setup>
const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="my-3">
    <h2 class="font-semibold text-sm">History</h2>
    <hr class="border-b border-nice-green border-solid border-1 my-2" />

    <ul id="list">
      <li
        class="bg-white p-2 my-1 text-xs border-r-2 flex justify-between"
        v-for="transaction in transactions"
        :key="transaction.id"
        :class="transaction.amount < 0 ? 'border-red-600' : 'border-green-600'"
      >
        {{ transaction.text }} <span>${{ transaction.amount }}</span>
      </li>
    </ul>
  </div>
</template>
