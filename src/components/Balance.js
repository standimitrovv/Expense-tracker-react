//Redux
import { useSelector } from 'react-redux';

// MUI
import { Box } from '@mui/material';

const Balance = () => {
  const allAmounts = useSelector((state) => state.transactions)
    .map((transaction) => transaction.amount)
    .map(Number);
  let totalBalance = allAmounts.reduce((a, e) => a + e, 0).toString();
  let newTotal = '';

  if (totalBalance.includes('-')) {
    let splitted = totalBalance.split('-');
    let [sign, amount] = splitted;
    newTotal = `-$${+amount}`;
  } else newTotal = `+$${totalBalance}`;

  return (
    <Box
      sx={{
        fontSize: 20,
        color: 'black',
      }}
    >
      <h5>YOUR BALANCE:</h5>
      <p
        style={{
          borderBottom: '1px solid black',
          width: '70px',
        }}
      >
        {newTotal}
      </p>
    </Box>
  );
};

export default Balance;
