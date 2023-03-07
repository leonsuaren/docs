import React from 'react';

import * as styled from './index';

export const HamburgerMenu = ({ openMenu, onClick }) => {

  return (
    <styled.HamburgerWrapper>
      <styled.HamburgerButton onClick={onClick}>
        <styled.LineOne openMenu={openMenu}/>
        <styled.LineTwo openMenu={openMenu}/>
        <styled.LineThree openMenu={openMenu}/>
      </styled.HamburgerButton>
    </styled.HamburgerWrapper>
  )
}