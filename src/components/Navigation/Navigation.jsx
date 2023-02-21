import React from 'react';
import { HamburgerMenu } from '../../components/hamburger-menu';

import { Navbar, NavbarContent, NavbarHamburger } from './styles.js';

export const Navigation = () => {
  return (
    <Navbar>
      <NavbarContent>
        <h3>Title</h3>
        <div>
          menu
        </div>
      </NavbarContent>
      <NavbarHamburger>
        <div />
        <HamburgerMenu />
      </NavbarHamburger>
    </Navbar>
  )
}