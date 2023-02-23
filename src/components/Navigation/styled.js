import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 100%;
  height: 70px;
  background-color: ${ props => props.theme.primaryColor };
  box-shadow: ${ props => props.theme.primaryBoxShadow };
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
    grid-template-columns: 90% 10%;
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