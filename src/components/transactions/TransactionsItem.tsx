import { ListItem } from '@mui/material';

import './TransactionItem.css';

import { transactionActions } from '../store/transaction-slice';
import { useDispatch } from 'react-redux';

interface Props {
  key: string;
  text: string;
  amount: string;
  id: string;
}

const TransactionItem: React.FC<Props> = ({ text, amount, id }) => {
  const dispatch = useDispatch();

  let expense = false;
  if (amount.startsWith('-')) {
    expense = true;
    let convertedAmount = amount.replace('-', '');
    amount = `-$${convertedAmount}`;
  } else amount = `+$${amount}`;

  const removeTransactionHandler = () => {
    dispatch(transactionActions.removeTransaction({ id: id }));
  };

  return (
    <div>
      <ListItem
        sx={{
          border: 1,
          boxShadow: 1,
          borderRadius: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
          borderRightColor: expense ? 'red' : 'green',
          borderRightWidth: 6,
          mb: 1,
          position: 'relative',
        }}
        className='item'
      >
        <button className='deleteBtn' onClick={removeTransactionHandler}>
          &#10006;
        </button>
        <span className='text'>{text}</span>
        <span className='amount'>{amount}</span>
      </ListItem>
    </div>
  );
};

export default TransactionItem;
