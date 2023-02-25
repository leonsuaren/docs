import styled from 'styled-components';

export const HomeContainer = styled.div`
  margin: 0;
  padding: 50px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: -2;
  position: relative;

  @media (min-width: 992px) {
    margin: 0 150px;
    }

  @media (min-width: 650px) and (max-width: 991px) {
    margin: 0 50px
   }
`;