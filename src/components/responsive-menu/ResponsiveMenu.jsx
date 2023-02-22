import React from 'react';

import { ResponsiveMenuWrapper, UnorderListMenu, ListItemMenuElement, ListItemMenuBrand, MenuItem, MenuItemBrand } from './styled';

export const ResponsiveMenu = ({ openMenu }) => {
  return (
    <ResponsiveMenuWrapper openMenu={openMenu}>
      <UnorderListMenu>
        <ListItemMenuBrand><MenuItemBrand><h1>Media</h1></MenuItemBrand></ListItemMenuBrand>
        <ListItemMenuElement><MenuItem>menu</MenuItem></ListItemMenuElement>
        <ListItemMenuElement><MenuItem>menu</MenuItem></ListItemMenuElement>
        <ListItemMenuElement><MenuItem>menu</MenuItem></ListItemMenuElement>
      </UnorderListMenu>
    </ResponsiveMenuWrapper>
  )
}