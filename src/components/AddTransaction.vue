<template>
  <h2>Add new transaction</h2>
  <form id="form">
    <fieldset>
      <legend>Transaction Details</legend>
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
    <button type="submit" aria-label="Add transaction">Add transaction</button>
  </form>
</template>
