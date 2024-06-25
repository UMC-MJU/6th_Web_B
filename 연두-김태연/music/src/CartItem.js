import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { increase, decrease, removeItem } from './cartslice';

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.p`
  margin: 0;
`;

const ItemPrice = styled.p`
  margin: 0;
  color: #888;
`;

const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0 10px;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const RemoveButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <ItemContainer>
      <ItemInfo>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
      </ItemInfo>
      <ItemQuantity>
        <QuantityButton onClick={() => dispatch(decrease(item.id))}>-</QuantityButton>
        <p>{item.quantity}</p>
        <QuantityButton onClick={() => dispatch(increase(item.id))}>+</QuantityButton>
        <RemoveButton onClick={() => dispatch(removeItem(item.id))}>Remove</RemoveButton>
      </ItemQuantity>
    </ItemContainer>
  );
}

export default CartItem;
