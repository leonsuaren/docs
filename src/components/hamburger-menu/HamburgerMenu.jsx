import React from 'react';

import { LineOne, LineTwo, LineThree, HamburgerWrapper, HamburgerButton } from './styled.js';

export const HamburgerMenu = ({ openMenu, onClick }) => {

  return (
    <HamburgerWrapper>
      <HamburgerButton onClick={onClick}>
        <LineOne openMenu={openMenu}/>
        <LineTwo openMenu={openMenu}/>
        <LineThree openMenu={openMenu}/>
      </HamburgerButton>
    </HamburgerWrapper>
  )
}