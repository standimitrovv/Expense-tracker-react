import { useRef } from 'react';

// Redux
import { transactionActions } from './store/transaction-slice';
import { useDispatch } from 'react-redux';

//MUI
import { Button, Divider, TextField } from '@mui/material';

const UserInput = () => {
  const textRef = useRef();
  const amountRef = useRef();

  const dispatch = useDispatch();

  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(
      transactionActions.addTransaction({
        text: textRef.current.value,
        amount: amountRef.current.value,
      })
    );

    // Bad practice, I know
    textRef.current.value = '';
    amountRef.current.value = '';
  };

  return (
    <div>
      <h3>Add a new transaction</h3>
      <Divider />
      <form onSubmit={submitFormHandler}>
        <TextField
          inputRef={textRef}
          required
          label='Text'
          fullWidth
          id='input-text'
          variant='standard'
          sx={{ mb: 2, mt: 2 }}
        />
        <TextField
          inputRef={amountRef}
          required
          label='Amount'
          fullWidth
          id='input-amount'
          variant='standard'
          type='number'
          helperText=" '-' for expenses"
        />
        <Button type='submit' variant='contained' sx={{ mt: 3 }} fullWidth>
          Add Transaction
        </Button>
      </form>
    </div>
  );
};

export default UserInput;
