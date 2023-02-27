import styled from 'styled-components';

export const ArrowsWrapper = styled.div`
  width: 95%;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 10px;
`;

export const LeftArrowSide = styled.div`
  width: 45%;
  height: 20px;
  padding: 0;
  margin: 0;
  border-left: 3px solid ${props => props.theme.themeColor};
  display: flex;
  align-items: center;

  @media (min-width: 451px) and (max-width: 667px) {
    padding-right: 10px;
  }

   @media (min-width: 350px) and (max-width: 450px) {
    padding-right: 10px;
   }

   @media (max-width: 349px) {
    padding-right: 10px;
  }
`;

export const WidthContainer = styled.div`
  width: 10%;
  height: 20px;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 451px) and (max-width: 667px) {
    font-size: .8rem;
  }

   @media (min-width: 350px) and (max-width: 450px) {
    font-size: .8rem;
   }

   @media (max-width: 349px) {
    font-size: .8rem;
  }
`;

export const RightArrowSide = styled.div`
  width: 45%;
  height: 20px;
  padding: 0;
  margin: 0;
  border-right: 3px solid ${props => props.theme.themeColor};
  display: flex;
  align-items: center;

  @media (min-width: 451px) and (max-width: 667px) {
    padding-left: 10px;
  }

   @media (min-width: 350px) and (max-width: 450px) {
    padding-left: 10px;
   }

   @media (max-width: 349px) {
    padding-left: 10px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${props => props.theme.themeColor};
`;