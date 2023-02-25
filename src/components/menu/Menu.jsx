import React from 'react';
import { useLocation } from 'react-router-dom';

import * as uti from '../../utils';

import { MenuContainer, Brand, MenuElements } from './styled';

export const Menu = () => {
  const params = useLocation();

  return (
    <MenuContainer>
      <Brand><h1><uti.LinkStyled isactive={params.pathname === '/'} to={'/'}>Media</uti.LinkStyled></h1></Brand>
      <MenuElements>
        <li><uti.LinkStyled isactive={params.pathname === '/examples'} to={'/examples'}>content</uti.LinkStyled></li>
      </MenuElements>
    </MenuContainer>
  )
}