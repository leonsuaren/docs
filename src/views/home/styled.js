import styled from 'styled-components';

export const HomeLayout = styled.div`
  position: relative;
  background-color: ${ props => props.theme.baseFontColor};
  z-index: 0;
  width: 100%;
`;

export const HomeContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
`;

export const HomeContentTitle = styled.h1`
  color: ${ props => props.theme.primaryColor};
  font-size: 4rem;
  text-transform: uppercase;

   @media (min-width: 451px) and (max-width: 667px) {
    font-size: 2rem;
  }

   @media (min-width: 350px) and (max-width: 450px) {
     font-size: 2rem;
   }

   @media (max-width: 349px) {
    font-size: 1.5rem;
  }
`;

export const TitleFirstLetter = styled.span`
  color: ${ props => props.theme.secondaryThemeColor};
  font-size: 5rem;
  text-transform: uppercase;

   @media (min-width: 451px) and (max-width: 667px) {
    font-size: 3rem;
  }

   @media (min-width: 350px) and (max-width: 450px) {
     font-size: 3rem;
   }

   @media (max-width: 349px) {
    font-size: 3rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
