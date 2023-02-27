import React from 'react';
import * as Styled from './styled';

export const DisplayWindow = ({ headerTitle, children }) => {

  return (
    <Styled.WindowContainer id='container'>
      <Styled.WindowHeader>
        <Styled.FirstBall/>
        <Styled.SecondBall/>
        <Styled.ThirdBall/>
        <Styled.WindowHeaderTitle>
          <p>{headerTitle}</p>
        </Styled.WindowHeaderTitle>
      </Styled.WindowHeader>
      {children}
    </Styled.WindowContainer>
  )
}