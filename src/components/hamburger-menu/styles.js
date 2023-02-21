import styled from 'styled-components';

export const HamburgerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HamburgerButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const Line = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background-color: rgb(143, 142, 145);
  margin: 5px;
  width: 40px
`;