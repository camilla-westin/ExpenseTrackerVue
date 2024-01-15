<script setup>
import Header from "@/components/Header.vue";
import Balance from "@/components/Balance.vue";
import IncomeExpenses from "@/components/IncomeExpenses.vue";
import TransactionsList from "@/components/TransactionList.vue";
import AddTransaction from "@/components/AddTransaction.vue";
</script>

<template>
  <Header />
  <main>
    <Balance />
    <IncomeExpenses />
    <TransactionsList />
    <AddTransaction />
  </main>
</template>
