import React from 'react';
import { Line, HamburgerWrapper, HamburgerButton } from './styles.js';

export const HamburgerMenu = () => {
  return (
    <HamburgerWrapper>
      <HamburgerButton>
        <Line />
        <Line />
        <Line />
      </HamburgerButton>
    </HamburgerWrapper>
  )
}