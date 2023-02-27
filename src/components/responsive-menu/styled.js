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
  z-index: 0;
  min-height: 400px;
  width: 250px;
  border-bottom: 10px solid ${ props => props.theme.themeColor };
  background-color:  ${ props => props.theme.primaryColor };
  box-shadow: ${ props => props.theme.primaryBoxShadow };
  ${menuAnimation}
  transition: top .5s ease-in-out;
  
  @media (min-width: 992px) {
    display: none;
    }

  @media (min-width: 650px) and (max-width: 991px) {
    display: flex;
    flex-direction: column;
   }

   @media (min-width: 451px) and (max-width: 667px) {
    display: flex;
    flex-direction: column;
  }

   @media (min-width: 350px) and (max-width: 450px) {
    display: flex;
    flex-direction: column;
   }

   @media (max-width: 349px) {
    display: flex;
    flex-direction: column;
  }
`;

export const UnorderListMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 400px;
  margin: 0;
  padding: 0;
`

export const ListItemMenuBrand = styled.li`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`; 

export const ListItemMenuElement = styled.li`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;