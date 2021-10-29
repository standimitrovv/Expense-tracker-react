//Redux
import { useSelector } from 'react-redux';

//MUI
import { Grid } from '@mui/material';

import { DefaultRootState } from './ts models/state.model';

const IncomeExpense = () => {
  const income = useSelector((state: DefaultRootState) => state.transactions)
    .map((transaction) => transaction.amount)
    .map(Number)
    .filter((amount) => amount > 0)
    .reduce((a, e) => a + e, 0);

  const expense = useSelector((state: DefaultRootState) => state.transactions)
    .map((transaction) => transaction.amount)
    .map(Number)
    .filter((amount) => amount < 0)
    .map((amount) => Math.abs(amount))
    .reduce((a, e) => a + e, 0);

  return (
    <Grid
      container
      sx={{ border: 1, height: 100, borderColor: 'lightgray', boxShadow: 1 }}
    >
      <Grid
        item
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRight: 1,
          borderColor: 'lightgray',
        }}
        xs={6}
      >
        <span style={{ fontWeight: 500 }}>INCOME</span>
        <span style={{ color: 'green' }}>+${income}</span>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span style={{ fontWeight: 500 }}>EXPENSE</span>
        <span style={{ color: 'red' }}>-${expense}</span>
      </Grid>
    </Grid>
  );
};

export default IncomeExpense;
