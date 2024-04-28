import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

function TopRatedPage() {
  return (
    <Container>
      <div style={{ textAlign: 'center' }}>
        <h2>TopRatedPage</h2>
      </div>
    </Container>
  );
}

export default TopRatedPage;
