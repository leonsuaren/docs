import styled, { css } from 'styled-components';

export const HamburgerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 992px) {
    display: none;
    }

  @media (min-width: 650px) and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }

   @media (min-width: 350px) and (max-width: 649px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }
`;

export const HamburgerButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  position: relative;
  padding: 0;
  margin: 0;
`;

const hamburgerAnimationOne = ({ openMenu }) => {
  if (openMenu) {
    return css`
      transform: rotate(0deg) translate(0px, 0px);
      `
  } else {
    return css`
      transform: rotate(45deg) translate(6px, 5px);
      `
  }
};

const hamburgerAnimationTwo = ({ openMenu }) => {
  if (openMenu) {
    return css`
      transform: translateX(0px);
      opacity: 1;
    `
  } else {
    return css`
      transform: translateX(-20px);
      opacity: 0;
    `
  }
}

const hamburgerAnimationThree = ({ openMenu }) => {
  if (openMenu) {
    return css`
      transform: translateX(0px);
    `
  } else {
    return css`
      transform: rotate(-45deg) translate(7px, -7px);
    `
  }
}

export const LineOne = styled.div`
  width: 40px;
  height: 4px;
  margin: 5px;
  border-radius: 5px;
  background-color: rgb(143, 142, 145);
  transition: all .5s ease-in-out;
  ${hamburgerAnimationOne}
`;

export const LineTwo = styled.div`
  width: 40px;
  height: 4px;
  margin: 5px;
  border-radius: 5px;
  background-color: rgb(143, 142, 145);
  transition: all .5s ease-in-out;
  ${hamburgerAnimationTwo}
`;

export const LineThree = styled.div`
  width: 40px;
  height: 4px;
  margin: 5px;
  border-radius: 5px;
  background-color: rgb(143, 142, 145);
  transition: all .5s ease-in-out;
  ${hamburgerAnimationThree}
`;

