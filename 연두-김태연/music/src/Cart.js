import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import CartItem from './CartItem';
import { clearCart, calculateTotals } from './cartslice';

const CartContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const CartHeader = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const CartButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

function Cart() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  React.useEffect(() => {
    dispatch(calculateTotals());
  }, [items, dispatch]);

  return (
    <CartContainer>
      <CartHeader>당신이 선택한 음반</CartHeader>
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      
      <CartButton onClick={() => dispatch(clearCart())}>Clear Cart</CartButton>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>
    </CartContainer>
  );
}

export default Cart;
