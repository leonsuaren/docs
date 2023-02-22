import styled, { css } from 'styled-components';

const menuAnimation = ({ openMenu }) => {
  if (openMenu) {
    return css`
      top: -400px;
    `
  } else {
    return css`
      top: 70px;
    `
  }
}

export const ResponsiveMenuWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  min-height: 400px;
  width: 250px;
  background-color: rgb(247, 244, 244);
  box-shadow: 0px 0px 5px 5px rgb(96, 93, 93);
  ${menuAnimation}
  transition: top .5s ease-in-out;
  
  @media (min-width: 992px) {
    display: none;
    }

  @media (min-width: 650px) and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }

   @media (min-width: 451px) and (max-width: 667px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

   @media (min-width: 350px) and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }

   @media (max-width: 349px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;