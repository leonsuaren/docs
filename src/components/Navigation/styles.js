import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 100%;
  height: 70px;
  background-color: rgb(247, 244, 244);
  box-shadow: 0px 0px 5px 5px rgb(96, 93, 93);
`;

export const NavbarContent = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  width: 100%;

  @media (min-width: 350px) and (max-width: 991px) {
    display: none;
  }
`;

export const NavbarHamburger = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  width: 100%;
  display: none;

  @media (min-width: 650px) and (max-width: 991px) {
    display: grid;
    grid-template-columns: 90% 10%;
    height: 100%;
  }

  @media (min-width: 350px) and (max-width: 649px) {
    display: grid;
    grid-template-columns: 80% 20%;
    height: 100%;
  }
`;