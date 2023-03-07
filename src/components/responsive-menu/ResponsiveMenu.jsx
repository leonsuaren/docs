import React from 'react';
import { useLocation } from 'react-router-dom';

import * as com from '../../components';
import * as styled from './index';

export const ResponsiveMenu = ({ openMenu, onClick }) => {
  const params = useLocation();

  return (
    <styled.ResponsiveMenuWrapper openMenu={openMenu}>
      <styled.UnorderListMenu>
        <styled.ListItemMenuBrand onClick={onClick} ><h1><com.LinkButton isactive={params.pathname === '/'} to='/' text={'DOCS'} /></h1></styled.ListItemMenuBrand>
        <styled.ListItemMenuElement onClick={onClick} ><com.LinkButton isactive={params.pathname === '/js-content'} to={'/js-content'} text={'JAVASCRIPT'} /></styled.ListItemMenuElement>
        <styled.ListItemMenuElement onClick={onClick} ><com.LinkButton isbutton='link' isactive={params.pathname === '/css-content'} to={'/css-content'} text={'CSS'} /></styled.ListItemMenuElement>
      </styled.UnorderListMenu>
    </styled.ResponsiveMenuWrapper>
  )
}