<template>
  <h2 class="mt-4 font-semibold text-sm">Add new transaction</h2>
  <hr class="border-b border-nice-green border-solid border-1 my-2" />
  <form id="form">
    <fieldset>
      <legend class="uppercase text-xs font-medium">Transaction Details</legend>
      <div>
        <label for="text">Text</label>
        <input
          type="text"
          id="text"
          placeholder="Enter text.."
          aria-labelledby="text"
        />
      </div>
      <div>
        <label for="amount">Amount</label>
        <input
          type="text"
          id="amount"
          placeholder="Enter amount.."
          aria-labelledby="amount"
        />
      </div>
    </fieldset>
    <button
      type="submit"
      aria-label="Add transaction"
      class="w-full text-white bg-nice-purple p-2 mt-4 font-medium text-sm"
    >
      Add transaction
    </button>
  </form>
</template>
