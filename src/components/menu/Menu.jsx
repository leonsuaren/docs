import React from 'react';
import { useLocation } from 'react-router-dom';

import * as com from '../../components';

import { MenuContainer, Brand, MenuElements } from './styled';

export const Menu = () => {
  const params = useLocation();

  return (
    <MenuContainer>
      <Brand><h1><com.LinkButton isactive={params.pathname === '/'} to={'/'} text={'DOCS'} /></h1></Brand>
      <MenuElements>
        <li><com.LinkButton isactive={params.pathname === '/css-content'} to={'/css-content'} text={'CSS'} /></li>
        <li><com.LinkButton isactive={params.pathname === '/js-content'} to={'/js-content'} text={'JAVASCRIPT'} /></li>
      </MenuElements>
    </MenuContainer>
  )
}