import React from 'react';
import Logo from './Logo';
import Search from './Search';
import { HeaderContainer } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Search />
    </HeaderContainer>
  );
};

export default Header;
