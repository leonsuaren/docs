import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 50px 10px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: -1;
  position: relative;

  @media (min-width: 992px) {
    margin: 0 150px;
    }

  @media (min-width: 650px) and (max-width: 991px) {
    margin: 0 50px
   }
`;