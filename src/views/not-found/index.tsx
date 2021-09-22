import React from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
`;

const NotFound: React.FC = () => {
  return <NotFoundContainer>Something goes wrong :(</NotFoundContainer>;
};

export default NotFound;
