<script setup>
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
    <div class="items-center">
      <h3 class="uppercase text-xs font-medium">Inkomst</h3>
      <p id="money-plus" class="text-green-600">+{{ income }}</p>
    </div>
    <span class="h-10 bg-slate-100 border"></span>
    <div class="items-center">
      <h3 class="uppercase text-xs font-medium">Kostnad</h3>
      <p id="money-minus" class="text-red-600">-{{ expense }}</p>
    </div>
  </div>
</template>
