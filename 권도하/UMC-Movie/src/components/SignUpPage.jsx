// SignUpPage.jsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function SignUpPage() {
  return (
    <Container>
      <div style={{ textAlign: 'center' }}>
        <h2>SignUpPage</h2>
      </div>
    </Container>
  );
}

export default SignUpPage;
