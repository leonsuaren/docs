import styled from 'styled-components';

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
  
  @media (min-width: 992px) {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 20% 80%;
    }

  @media (min-width: 650px) and (max-width: 991px) {
    display: none;
   }

   @media (min-width: 350px) and (max-width: 649px) {
    display: none;
   }
`;