import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increase: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrease: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity < 1) {
          state.items = state.items.filter(item => item.id !== action.payload);
        }
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
    calculateTotals: (state) => {
      let totalQuantity = 0;
      let totalAmount = 0;
      state.items.forEach(item => {
        totalQuantity += item.quantity;
        totalAmount += item.quantity * item.price;
      });
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },
  },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
