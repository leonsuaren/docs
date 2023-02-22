import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 100%;
  height: 70px;
  background-color: rgb(247, 244, 244);
  box-shadow: 0px 0px 5px 5px rgb(96, 93, 93);
  position: relative;

  @media (min-width: 992px) {
    display: flex;
  }

  @media (min-width: 668px) and (max-width: 991px) {
    display: grid;
    grid-template-columns: 90% 10%;
  }

  @media (min-width: 451px) and (max-width: 667px) {
    display: grid;
    grid-template-columns: 80% 20%;
  }

  @media (min-width: 350px) and (max-width: 450px) {
    display: grid;
    grid-template-columns: 80% 20%;
  }

  @media (max-width: 349px) {
    display: grid;
    grid-template-columns: 70% 30%;
  }
`;