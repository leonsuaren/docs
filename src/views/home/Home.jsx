import React from 'react';

import * as lay from '../../layout';
import * as styled from './styled';

export const Home = () => {
  return (
    <styled.HomeLayout>
      <lay.Layout>
        <styled.HomeContentWrapper>
          <styled.HomeContentTitle>JAVASCRIPT, CSS</styled.HomeContentTitle>
          <styled.HomeContentTitle>DOCUMENTATION</styled.HomeContentTitle>
        </styled.HomeContentWrapper>
      </lay.Layout>
    </styled.HomeLayout>
  )
}