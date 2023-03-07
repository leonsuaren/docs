import React from 'react';
import { useLocation } from 'react-router-dom';

import * as com from '../../components';

import { ResponsiveMenuWrapper, UnorderListMenu, ListItemMenuElement, ListItemMenuBrand } from './styled';

export const ResponsiveMenu = ({ openMenu, onClick }) => {
  const params = useLocation();

  return (
    <ResponsiveMenuWrapper openMenu={openMenu}>
      <UnorderListMenu>
        <ListItemMenuBrand onClick={onClick} ><h1><com.LinkButton isactive={params.pathname === '/'} to='/' text={'DOCS'} /></h1></ListItemMenuBrand>
        <ListItemMenuElement onClick={onClick} ><com.LinkButton isactive={params.pathname === '/js-content'} to={'/js-content'} text={'JAVASCRIPT'} /></ListItemMenuElement>
        <ListItemMenuElement onClick={onClick} ><com.LinkButton isbutton='link' isactive={params.pathname === '/css-content'} to={'/css-content'} text={'CSS'} /></ListItemMenuElement>
      </UnorderListMenu>
    </ResponsiveMenuWrapper>
  )
}