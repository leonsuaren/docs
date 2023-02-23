import React from 'react';
import { useLocation } from 'react-router-dom';

import { LinkStyled } from '../../utils/GlobalStyles';

import { ResponsiveMenuWrapper, UnorderListMenu, ListItemMenuElement, ListItemMenuBrand, MenuItem, MenuItemBrand } from './styled';

export const ResponsiveMenu = ({ openMenu, onClick }) => {
  const params = useLocation();

  return (
    <ResponsiveMenuWrapper openMenu={openMenu}>
      <UnorderListMenu>
        <ListItemMenuBrand onClick={onClick} ><h1><LinkStyled isActive={params.pathname === '/'} to='/'>Media</LinkStyled></h1></ListItemMenuBrand>
        <ListItemMenuElement><LinkStyled isActive={params.pathname === '/examples'} to='/examples'>Examples</LinkStyled></ListItemMenuElement>
      </UnorderListMenu>
    </ResponsiveMenuWrapper>
  )
}