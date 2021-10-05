import { ListItem } from '@mui/material';

const TransactionItem = (props) => {
  let amount = props.amount;
  let expense = false;
  if (amount.startsWith('-')) {
    expense = true;
    amount = amount.replace('-', '');
    amount = `-$${amount}`;
  } else amount = `+$${amount}`;

  return (
    <ListItem
      sx={{
        border: 1,
        boxShadow: 1,
        borderRadius: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        borderRightColor: expense ? 'red' : 'green',
        borderRightWidth: 6,
        mb: 1,
      }}
    >
      <span>{props.text}</span>
      <span>{amount}</span>
    </ListItem>
  );
};

export default TransactionItem;
