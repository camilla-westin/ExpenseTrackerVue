<script setup>
import { ref, computed } from "vue";
import Balance from "@/components/Balance.vue";
import IncomeExpenses from "@/components/IncomeExpenses.vue";
import TransactionsList from "@/components/TransactionList.vue";
import AddTransaction from "@/components/AddTransaction.vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const transactions = ref([
  { id: 1, text: "Flower", amount: -19.99 },
  { id: 2, text: "Salary", amount: 219.95 },
  { id: 2, text: "Food", amount: -20.95 },
]);

const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
});

const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

const expense = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

const handleTransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount,
  });

  toast.success("Transaction added");
};

const generateUniqueId = () => {
  return Math.floor(Math.random() * 100000);
};
</script>

<template>
  <main class="flex justify-center items-center h-screen bg-nice-green">
    <div>
      <h1 class="font-semibold text-m">Expense tracker</h1>
      <Balance :total="+total" />
      <IncomeExpenses :income="+income" :expense="+expense" />
      <TransactionsList :transactions="transactions" />
      <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
    </div>
  </main>
</template>
