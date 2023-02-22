import styled from 'styled-components';

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
`;

export const Brand = styled.div`
  width: 100;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 650px) and (max-width: 991px) {
    display: none;
  }

   @media (min-width: 350px) and (max-width: 649px) {
    display: none;
  }
`;

export const MenuElements = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0px 30px;
  
  @media (min-width: 650px) and (max-width: 991px) {
    display: none;
  }

   @media (min-width: 350px) and (max-width: 649px) {
    display: none;
  }

`;