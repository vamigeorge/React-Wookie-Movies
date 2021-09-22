import React from 'react';
import styled from 'styled-components';
import Header from '../header';

interface LayoutProps {
  children: React.ReactNode;
}

const Container = styled.div`
  max-width: 120em;
  margin: 1em auto;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
