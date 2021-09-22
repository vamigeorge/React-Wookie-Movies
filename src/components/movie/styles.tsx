import styled from 'styled-components';

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieTopDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MovieTitleRating = styled.div`
  font-size: 2em;
  font-weight: 200;
`;

export const MovieOtherInfo = styled.div`
  font-size: 1.2em;
  margin-top: 1.5em;
`;

export const MovieCast = styled.div`
  font-size: 1.2em;
`;

export const MovieOverview = styled.div`
  margin-top: 1.5em;
  font-size: 1.5em;
  font-weight: 200;
`;

export const MovieImage = styled.img`
  margin: 0 1em;

  @media (max-width: 576px) {
    max-height: 60vh;
    max-width: 60vw;
  }
`;
