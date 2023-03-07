import React, { useState, Fragment } from 'react';

import * as com from '..';

import { Navbar } from './styled.js';

export const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const handleOnOpenMenu = () => {
    setOpenMenu(s => !s);
  }

  return (
    <Fragment>
      <Navbar>
        <com.Menu />
        <com.HamburgerMenu onClick={handleOnOpenMenu} openMenu={openMenu} />
      </Navbar>
      <com.ResponsiveMenu onClick={handleOnOpenMenu} openMenu={openMenu} />
    </Fragment>
  )
}