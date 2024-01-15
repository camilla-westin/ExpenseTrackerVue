<script setup>
import { defineProps } from "vue";

const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="bg-white p-4 flex justify-around items-center my-2">
    <div>
      <h3 class="uppercase text-xs font-medium">Income</h3>
      <p id="money-plus" class="text-green-600">+${{ income }}</p>
    </div>
    <span class="h-10 bg-slate-100 border"></span>
    <div>
      <h3 class="uppercase text-xs font-medium">Expense</h3>
      <p id="money-minus" class="text-red-600">-${{ expense }}</p>
    </div>
  </div>
</template>
