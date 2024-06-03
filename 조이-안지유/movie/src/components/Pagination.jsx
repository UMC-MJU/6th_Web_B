import React from 'react';
import styled from "styled-components";

const Pagination = ({currentPage, totalPages, onPageChange}) => {
  console.log(currentPage, totalPages);

  return (
    <PaginationContainer>
      <MovePageBtn onClick={() => {
        onPageChange(currentPage - 1)
      }}>&lt;</MovePageBtn>
      <NowPageNumber>{currentPage}</NowPageNumber>
      <MovePageBtn onClick={() => {
        onPageChange(currentPage + 1)
      }}>&gt;</MovePageBtn>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  gap: 100px;
  background-color: rgb(33, 35, 72);
  border: none;
`

const MovePageBtn = styled.button`
  font-size: 20px;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
`

const NowPageNumber = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: white;
`
