import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/transactions/TransactionsList';
import UserInput from './components/UserInput';

// MUI
import { Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth='xs'>
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <UserInput />
    </Container>
  );
}

export default App;
