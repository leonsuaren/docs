import styled from 'styled-components';

export const ArrowsWrapper = styled.div`
  width: 95%;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 10px;
`;

export const LeftArrowSide = styled.div`
  width: 45%;
  height: 20px;
  padding: 0;
  margin: 0;
  border-left: 3px solid ${props => props.theme.themeColor};
  display: flex;
  align-items: center;
`;

export const WidthContainer = styled.div`
  width: 10%;
  height: 20px;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightArrowSide = styled.div`
  width: 45%;
  height: 20px;
  padding: 0;
  margin: 0;
  border-right: 3px solid ${props => props.theme.themeColor};
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${props => props.theme.themeColor};
`;