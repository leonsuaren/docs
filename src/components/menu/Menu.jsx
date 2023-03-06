import React from 'react';
import { useLocation } from 'react-router-dom';

import * as uti from '../../utils';

import { MenuContainer, Brand, MenuElements } from './styled';

export const Menu = () => {
  const params = useLocation();

  return (
    <MenuContainer>
      <Brand><h1><uti.LinkStyled isactive={params.pathname === '/'} to={'/'}>Docs</uti.LinkStyled></h1></Brand>
      <MenuElements>
        <li><uti.LinkStyled isactive={params.pathname === '/css-content'} to={'/css-content'}>CSS</uti.LinkStyled></li>
        <li><uti.LinkStyled isactive={params.pathname === '/javascript'} to={'/javascript'}>JAVASCRIPT</uti.LinkStyled></li>
      </MenuElements>
    </MenuContainer>
  )
}