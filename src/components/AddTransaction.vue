<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";

const text = ref("");
const amount = ref("");
const toast = useToast();

const emit = defineEmits(["transactionSubmitted"]);

const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast.error("Fyll i båda fält");
    return;
  }

  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value),
  };

  emit("transactionSubmitted", transactionData);

  text.value = "";
  amount.value = "";
};
</script>

<template>
  <h2 class="mt-4 font-semibold text-sm">Lägg till transaktion</h2>
  <hr class="border-b border-nice-green border-solid border-1 my-2" />
  <form id="form" @submit.prevent="onSubmit">
    <fieldset>
      <legend class="uppercase text-xs font-medium">Detaljer</legend>
      <div class="flex items-center">
        <div class="my-2 w-2/3 gap-2">
          <label for="text" class="text-sm block">Text</label>
          <input
            type="text"
            id="text"
            class="px-2 py-1 text-xs w-full"
            placeholder="Text"
            aria-labelledby="text"
            v-model="text"
          />
        </div>
        <div class="my-2 w-1/3">
          <label for="amount" class="text-sm block">Belopp <br /> </label>
          <input
            type="text"
            id="amount"
            class="px-2 py-1 text-xs w-full"
            placeholder="Belopp"
            aria-labelledby="amount"
            v-model="amount"
          />
        </div>
      </div>
    </fieldset>
    <button
      type="submit"
      aria-label="Add transaction"
      class="w-full text-white bg-nice-purple p-2 mt-4 font-medium text-sm"
    >
      Lägg till transaktion
    </button>
  </form>
</template>
