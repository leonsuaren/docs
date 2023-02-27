import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: auto;
  background-color: ${ props => props.theme.primaryColor};
  box-shadow: ${ props => props.theme.primaryBoxShadow};
  z-index: 1;
  padding: 5px;


  @media (min-width: 992px) {
    height: 250px;
    padding: 20px 100px;
  }

  @media (min-width: 668px) and (max-width: 991px) {
    height: 200px;
    padding: 20px 100px;
  }

  @media (min-width: 451px) and (max-width: 667px) {
    height: 200px;
    padding: 20px 100px;
  }

  @media (min-width: 350px) and (max-width: 450px) {
    height: 150px;
  }

  @media (max-width: 349px) {
    height: 120px;
  }
`;