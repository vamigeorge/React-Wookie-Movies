import React, { SyntheticEvent, useContext, useState } from 'react';
import { ReactComponent as Glass } from './magnifying-glass.svg';
import { Search as SearchContainer, Form, Input } from './styles';
import { useHistory, useLocation } from 'react-router';
import { MainStoreContext } from '../../core/store';
import { observer } from 'mobx-react-lite';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');

  const location = useLocation();
  const history = useHistory();

  const { movieStore } = useContext(MainStoreContext);
  const { searchMovie } = movieStore;

  const onStartSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (location.pathname !== '/') {
      history.push('/');
    }
    await searchMovie(query);
  };

  const onInput = (event: SyntheticEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  return (
    <SearchContainer>
      <Form onSubmit={onStartSearch}>
        <Glass style={{ width: '2em', height: '2em', marginRight: '.5em' }} />
        <Input type="text" autoComplete="off" onChange={onInput} value={query} />
      </Form>
    </SearchContainer>
  );
};

export default observer(Search);
