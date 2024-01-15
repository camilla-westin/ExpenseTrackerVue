<script setup>
import Balance from "@/components/Balance.vue";
import IncomeExpenses from "@/components/IncomeExpenses.vue";
import TransactionsList from "@/components/TransactionList.vue";
import AddTransaction from "@/components/AddTransaction.vue";
</script>

<template>
  <main class="flex justify-center items-center h-screen bg-nice-green">
    <div>
      <h1 class="font-semibold text-m">Expense tracker</h1>
      <Balance />
      <IncomeExpenses />
      <TransactionsList />
      <AddTransaction />
    </div>
  </main>
</template>
