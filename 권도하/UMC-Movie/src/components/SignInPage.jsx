// SignInPage.jsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function SignInPage() {
  return (
    <Container>
      <div style={{ textAlign: 'center' }}>
        <h2>SignInPage</h2>
      </div>
    </Container>
  );
}

export default SignInPage;
