import { createSlice, current } from '@reduxjs/toolkit';

interface State {
  transactions: {
    amount: string;
    text: string;
    id: string;
  }[];
}

interface ActionAdd {
  payload: {
    text: string;
    amount: string;
    id?: string;
  };
}

interface ActionRemove {
  payload: {
    id: string;
  };
}

const initState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: initState,
  reducers: {
    addTransaction(state: State, action: ActionAdd) {
      const newItem = action.payload;
      state.transactions.push({
        text: newItem.text,
        amount: newItem.amount,
        id: newItem.text + newItem.amount,
      });
      console.log(current(state));
    },
    removeTransaction(state: State, action: ActionRemove) {
      const itemsId = action.payload.id;
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== itemsId
      );
    },
  },
});

export default transactionSlice;
export const transactionActions = transactionSlice.actions;
