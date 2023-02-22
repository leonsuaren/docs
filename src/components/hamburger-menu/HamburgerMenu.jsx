import React, { useState } from 'react';
import { LineOne, LineTwo, LineThree, HamburgerWrapper, HamburgerButton } from './styles.js';

export const HamburgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const handleOnOpenMenu = () => {
    setOpenMenu(s => !s);
  }

  return (
    <HamburgerWrapper>
      <HamburgerButton onClick={handleOnOpenMenu}>
        <LineOne openMenu={openMenu}/>
        <LineTwo openMenu={openMenu}/>
        <LineThree openMenu={openMenu}/>
      </HamburgerButton>
    </HamburgerWrapper>
  )
}