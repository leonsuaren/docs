import styled from 'styled-components';

export const WindowContainer = styled.div`
  margin: 50px;
  width: auto;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 5px 5px 5px black;
  overflow: scroll;
  min-height: 600px;
  z-index: -2;
  overflow: hidden;

  @media (min-width: 350px) and (max-width: 450px) {
    margin: 50px 10px;
  }

  @media (max-width: 349px) {
    margin: 50px 10px;
  }
`;

export const WindowHeader = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 50px;
  width: auto;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #253237;
  padding: 0 10px;
  z-index: -2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const FirstBall = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #ff5f55;
  margin-right: 5px;
`;

export const SecondBall = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #FFBD2D;
  margin-right: 5px;
`;

export const ThirdBall = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #25C93F;
  margin-right: 5px;
`;

export const WindowHeaderTitle = styled.div`
  color: white !important;
  font-size: 1rem;
  font-weight: bold;
  padding: 0;
  margin: 0 20px;

@media (min-width: 992px) {
}

@media (min-width: 668px) and (max-width: 991px) {
}

@media (min-width: 451px) and (max-width: 667px) {
}

@media (min-width: 350px) and (max-width: 450px) {
}

@media (max-width: 349px) {
}
`;