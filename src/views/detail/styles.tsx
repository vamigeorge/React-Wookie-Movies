import styled from 'styled-components';

export const Movie = styled.div`
  display: flex;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
