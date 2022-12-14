import {createSlice} from '@reduxjs/toolkit';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: [],
  reducers: {
    addPaymentMethod: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default paymentSlice.reducer;
export const addPaymentMethod = paymentSlice.actions.addPaymentMethod;
