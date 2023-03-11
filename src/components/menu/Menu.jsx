import React from 'react';
import { useLocation } from 'react-router-dom';

import * as com from '../../components';
import * as styled from './styled'

export const Menu = () => {
  const params = useLocation();

  return (
    <styled.MenuContainer>
      <styled.Brand><h1><com.LinkButton isactive={params.pathname === '/'} to={'/'} text={'DOCS'} /></h1></styled.Brand>
      <styled.MenuElements>
        <li><com.LinkButton isactive={params.pathname === 'css-content'} to={'css-content'} text={'CSS'} /></li>
        <li><com.LinkButton isactive={params.pathname === 'js-content'} to={'js-content'} text={'JAVASCRIPT'} /></li>
      </styled.MenuElements>
    </styled.MenuContainer>
  )
}