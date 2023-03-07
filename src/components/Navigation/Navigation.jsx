import React, { useState, Fragment } from 'react';

import * as com from '../../components';
import * as styled from './index';

export const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const handleOnOpenMenu = () => {
    setOpenMenu(s => !s);
  }

  return (
    <Fragment>
      <styled.Navbar>
        <com.Menu />
        <com.HamburgerMenu onClick={handleOnOpenMenu} openMenu={openMenu} />
      </styled.Navbar>
      <com.ResponsiveMenu onClick={handleOnOpenMenu} openMenu={openMenu} />
    </Fragment>
  )
}