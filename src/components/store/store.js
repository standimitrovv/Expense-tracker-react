import { configureStore } from '@reduxjs/toolkit';

import transactionSlice from './transaction-slice';

const store = configureStore({
  reducer: transactionSlice.reducer,
});

export default store;
