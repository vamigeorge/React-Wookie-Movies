import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
  padding-left: 1em;
  border-bottom: 0.1em solid #282c34;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Logo = styled.div`
  flex: 0;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Search = styled.div`
  margin-right: 1em;
  display: flex;
  align-items: flex-end;
`;

export const Input = styled.input`
  font-size: inherit;
  background-color: #f4f2f2;
  padding: 0.7rem 1rem;
  border: 0.1em solid #282c34;
`;

export const Form = styled.form`
  display: flex;
  flex: 100%;
  align-items: center;
  padding-bottom: 0.5em;

  @media (max-width: 576px) {
    justify-content: center;
  }
`;
