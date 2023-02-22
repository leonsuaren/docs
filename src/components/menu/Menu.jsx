import React from 'react';

import { MenuContainer, Brand, MenuElements } from './styled';

export const Menu = () => {
  return (
    <MenuContainer>
      <Brand><h1><a href='#home'>Media</a></h1></Brand>
      <MenuElements>
        <li><a>content</a></li>
        <li><a>content</a></li>
      </MenuElements>
    </MenuContainer>
  )
}