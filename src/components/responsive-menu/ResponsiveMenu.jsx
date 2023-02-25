import React from 'react';
import { useLocation } from 'react-router-dom';

import * as uti from '../../utils';

import { ResponsiveMenuWrapper, UnorderListMenu, ListItemMenuElement, ListItemMenuBrand, MenuItem, MenuItemBrand } from './styled';

export const ResponsiveMenu = ({ openMenu, onClick }) => {
  const params = useLocation();

  return (
    <ResponsiveMenuWrapper openMenu={openMenu}>
      <UnorderListMenu>
        <ListItemMenuBrand onClick={onClick} ><h1><uti.LinkStyled isactive={params.pathname === '/'} to='/'>Media</uti.LinkStyled></h1></ListItemMenuBrand>
        <ListItemMenuElement onClick={onClick} ><uti.LinkStyled isactive={params.pathname === '/examples'} to='/examples'>Examples</uti.LinkStyled></ListItemMenuElement>
      </UnorderListMenu>
    </ResponsiveMenuWrapper>
  )
}