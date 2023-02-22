import React, { useState } from 'react';
import { HamburgerMenu } from '../../components/hamburger-menu';
import { Menu } from '../../components/menu';

import { Navbar } from './styles.js';

export const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const handleOnOpenMenu = () => {
    setOpenMenu(s => !s);
  }

  return (
    <Navbar>
      <Menu />
      <HamburgerMenu onClick={handleOnOpenMenu} openMenu={openMenu}/>
    </Navbar>
  )
}