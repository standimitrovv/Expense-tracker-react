export interface DefaultRootState {
  state: { transactions: {}[] };
  transactions: {
    id: string;
    text: string;
    amount: number;
    transactions: {}[];
  }[];
}
