// MUI
import { List, Box, Divider } from '@mui/material';

// Components
import TransactionItem from './TransactionsItem';

//Redux
import { useSelector } from 'react-redux';

import { DefaultRootState } from '../ts models/state.model';

const TransactionList = () => {
  const transactions = useSelector(
    (state: DefaultRootState) => state.transactions
  );

  return (
    <Box>
      <h3>History</h3>
      <Divider />
      <List sx={{ maxHeight: 350, overflow: 'auto' }}>
        {transactions.map((transaction: any) => (
          <TransactionItem
            key={transaction.id}
            text={transaction.text}
            amount={transaction.amount}
            id={transaction.id}
          />
        ))}
      </List>
    </Box>
  );
};

export default TransactionList;
