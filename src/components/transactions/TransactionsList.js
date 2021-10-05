// MUI
import { List, Box, Divider } from '@mui/material';

// Components
import TransactionItem from './TransactionsItem';

//Redux
import { useSelector } from 'react-redux';

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions);

  return (
    <Box>
      <h3>History</h3>
      <Divider />
      <List sx={{ maxHeight: 150, overflow: 'auto' }}>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            text={transaction.text}
            amount={transaction.amount}
          />
        ))}
      </List>
    </Box>
  );
};

export default TransactionList;
