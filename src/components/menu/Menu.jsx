import React from 'react';
import { useLocation } from 'react-router-dom';

import { LinkStyled } from '../../utils/GlobalStyles';

import { MenuContainer, Brand, MenuElements } from './styled';

export const Menu = () => {
  const params = useLocation();

  return (
    <MenuContainer>
      <Brand><h1><LinkStyled isActive={params.pathname === '/'} to={'/'}>Media</LinkStyled></h1></Brand>
      <MenuElements>
        <li><LinkStyled isActive={params.pathname === '/examples'} to={'/examples'}>content</LinkStyled></li>
      </MenuElements>
    </MenuContainer>
  )
}