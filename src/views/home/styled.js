import styled from 'styled-components';

export const HomeLayout = styled.div`
  position: relative;
  background-color: ${ props => props.theme.baseFontColor };
  z-index: -3;
  width: 100%;
  height: 100vh;
`;

export const HomeContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeContentTitle = styled.h1`
  color: ${ props => props.theme.primaryColor };
`;
