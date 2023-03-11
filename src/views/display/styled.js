import styled from 'styled-components';
import { FiChevronRight, FiSquare } from "react-icons/fi";

export const DisplayContainerLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 375px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 15px;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 100%;
  }
`;

export const MiniWindowContainer = styled.div`
  display: grid;
  grid-template-columns: 47.5% 5% 47.5%;
  gap: 1px;
  padding: 10px;
`;

export const DisplaySquare = styled.button`
  height: 50px;
  color: aliceblue;
  background-color: rgb(100, 99, 99);
  margin: 5px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #CCCCCC;
  border: 1px solid rgb(41, 40, 40);
  cursor: pointer;
`;

export const DisplaySquareContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  height: 50px;
`;

export const DisplayPropertySquare = styled.div`
  width: 100%;
  height: 50px;
  color: aliceblue;
  background-color: rgb(177, 208, 243);
  border-radius: 5px;
  box-shadow: 5px 5px 5px #CCCCCC;
`;

export const DisplayEffectContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const DisplayWrapper = styled.div`
  background-color: aliceblue;
  border-radius: 5px;
  border: 1px solid #CCCCCC;
  box-shadow: 5px 5px 5px #CCCCCC;
  width: 100%;
  height: 300px;
  display: flex;
  position: sticky;
  top: 50px;
`;

export const ArrowsMiddleSection = styled.div`
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  align-items: center;
  justify-items: center;
  height: 50px;
`;

export const ArrowIcon = styled(FiChevronRight)`
  font-size: 1.2rem;
`;

export const DisplayPropertyBlock = styled.div`
  width: 100%;
  height: 100px;
  margin: 10px;
`;

export const DisplayBlockLittleSquare = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: block;
`;

export const DisplayInlineBlockLittleSquare = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: inline-block;
`;

export const DisplayPropertyFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// export const DisplayFlexLittleSquare = styled.div`
//   height: 50px;
//   border-radius: 10px;
//   display: flex;
// `;

export const DisplayPropertyGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 2px;
  padding: 2px;
`;

export const One = styled.div`
  border: 1px solid rgb(247, 199, 207);
  display: flex;
  height: 50px;
  border-radius: 10px;
`;
export const Two = styled.div`
  border: 1px solid rgb(141, 221, 126);
  display: flex;
  height: 50px;
  border-radius: 10px;
`;
export const Three = styled.div`
  border: 1px solid rgb(146, 31, 50);
  display: flex;
  height: 50px;
  border-radius: 10px;
`;
export const Four = styled.div`
  border: 1px solid rgb(226, 79, 194);
  display: flex;
  height: 50px;
  border-radius: 10px;
`;
export const Five = styled.div`
  border: 1px solid rgb(209, 224, 73);
  display: flex;
  height: 50px;
  border-radius: 10px;
`;
export const Six = styled.div`
  border: 1px solid rgb(100, 100, 99);
  display: flex;
  height: 50px;
  border-radius: 10px;
`;

export const DisplayGridSquareOne = styled.div`
  border-radius: 10px;
  margin: 1px;
  grid-column: 1 / 5;
`;

export const DisplayGridSquareTwo = styled.div`
  border-radius: 10px;
  margin: 1px;
  grid-column: 1;
  grid-row-start: 2;
  grid-row-end: 6;
`;

export const DisplayGridSquareThree = styled.div`
  border-radius: 10px;
  margin: 1px;
  grid-column: 2 / 5;
  grid-row: 2 / 4;
`;
export const DisplayGridSquareFour = styled.div`
  border-radius: 10px;
  margin: 1px;
  grid-column: 2 / 4;
  grid-row: 4 / 6;
`;
export const DisplayGridSquareFive = styled.div`
  border-radius: 10px;
  margin: 1px;
  grid-column: 4 / 5;
  grid-row: 4 / 6;
`;

export const InlineFlexParent = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 120px;
  margin: 5px;
  border-radius: 10px;
`;