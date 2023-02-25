import React from 'react';

import * as styled from './styled';

export const HomeLayout = ({ children }) => {
  return (
    <styled.HomeContainer>
      {children}
    </styled.HomeContainer>
  )
}