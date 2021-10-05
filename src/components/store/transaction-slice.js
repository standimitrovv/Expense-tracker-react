import { createSlice, current } from '@reduxjs/toolkit';

const initState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: initState,
  reducers: {
    addTransaction(state, action) {
      const newItem = action.payload;
      state.transactions.push({
        text: newItem.text,
        amount: newItem.amount,
        id: newItem.text + newItem.amount,
      });
      console.log(current(state));
    },
    removeTransaction(state, action) {},
  },
});

export default transactionSlice;
export const transactionActions = transactionSlice.actions;
