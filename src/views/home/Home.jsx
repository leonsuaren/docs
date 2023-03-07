import React from 'react';

import * as lay from '../../layout';
import * as com from '../../components';
import * as styled from './styled';

export const Home = () => {
  return (
    <styled.HomeLayout>
      <lay.Layout>
        <styled.HomeContentWrapper>
          <styled.HomeContentTitle><styled.TitleFirstLetter>G</styled.TitleFirstLetter>etting <styled.TitleFirstLetter>S</styled.TitleFirstLetter>tarted</styled.HomeContentTitle>
          <styled.ButtonsWrapper>
            <com.LinkButton isbutton='primary' to={'/js-content'} text={'JAVASCRIPT'} />
            <com.LinkButton isbutton='secondary' to={'/css-content'} text={'CSS'} />
          </styled.ButtonsWrapper>
        </styled.HomeContentWrapper>
      </lay.Layout>
    </styled.HomeLayout>
  )
}