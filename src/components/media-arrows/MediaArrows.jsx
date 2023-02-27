import React, { useLayoutEffect, useState } from 'react';

import * as styled from './styled';

export const MediaArrows = () => {
  const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  const [windowWidth, windowHeight] = useWindowSize();

  return (
    <styled.ArrowsWrapper>
      <styled.LeftArrowSide>
        <styled.Line />
      </styled.LeftArrowSide>
      <styled.WidthContainer>
        <h3>
          {windowWidth}px
        </h3>
      </styled.WidthContainer>
      <styled.RightArrowSide>
        <styled.Line />
      </styled.RightArrowSide>
    </styled.ArrowsWrapper>
  )
}