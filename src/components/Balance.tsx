//Redux
import { useSelector } from 'react-redux';

// MUI
import { Box } from '@mui/material';

import { DefaultRootState } from './ts models/state.model';

const Balance = () => {
  const allAmounts = useSelector(
    (state: DefaultRootState) => state.transactions
  );
  const numbered = allAmounts
    .map((transaction) => transaction.amount)
    .map(Number);
  let totalBalance = numbered.reduce((a, e) => a + e, 0).toString();
  let newTotal: string = '';

  if (totalBalance.includes('-')) {
    const splitted = totalBalance.split('-');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [sign, amount] = splitted;
    newTotal = `-$${+amount}`;
  } else newTotal = `+$${totalBalance}`;

  return (
    <Box
      sx={{
        fontSize: 20,
        color: 'black',
      }}
    >
      <h5
        style={{
          borderBottom: '1px solid black',
          width: '9rem',
        }}
      >
        YOUR BALANCE:
      </h5>
      <p
        style={{
          width: '70px',
          fontWeight: 700,
        }}
      >
        {newTotal}
      </p>
    </Box>
  );
};

export default Balance;
