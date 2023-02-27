import React from 'react';

import * as styled from './styled';

export const Layout = ({ children }) => {
  return (
    <styled.Container>
      {children}
    </styled.Container>
  )
}