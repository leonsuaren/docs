import styled from 'styled-components';

export const ExamplesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.h1`
  position: relative;
  z-index: -2;
`;

export const Text = styled.p`
  text-align: justify;
  tab-size: 2;
`;

export const MediaBreakpointContainer = styled.div`
  border-radius: 5px;
  width: auto;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;

  @media (min-width: 320px) and (max-width:480px ) {
    background-color: rgba(247, 42, 59, .5);
  }

  @media (min-width: 481px) and (max-width: 768px) {
    background-color: rgba(52, 61, 163, .5);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    background-color: rgba(236, 242, 65, .5);
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    background-color: rgba(68, 242, 65, .5);
  }
  @media (min-width: 1201px) {
    background-color: rgba(45, 67, 82, .5);
  }
`;

export const MediaBreakpointContent = styled.h3`
  @media (min-width: 320px) and (max-width:480px ) {
    &::before {
      content: 'Mobile';
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    &::before {
      content: 'Tablet';
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    &::before {
      content: 'Laptop'
    }
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    &::before {
      content: 'Desktop'
    }
  }

  @media (min-width: 1201px) {
    &::before {
      content: 'Large Devices'
    }
  }
`;

export const MediaColorMobile = styled.span`
  width: 30px;
  padding: 0px 5px;
  border-radius: 5px;
  background-color: rgba(247, 42, 59, .5);
`;

export const MediaColorTablet = styled.span`
  width: 30px;
  padding: 0px 5px;
  border-radius: 5px;
  background-color: rgba(52, 61, 163, .5);
`;

export const MediaColorLaptop = styled.span`
  width: 30px;
  padding: 0px 5px;
  border-radius: 5px;
  background-color: rgba(236, 242, 65, .5);
`;

export const MediaColorDesktop = styled.span`
  width: 30px;
  padding: 0px 5px;
  border-radius: 5px;
  background-color: rgba(68, 242, 65, .5);
`;

export const MediaColorLarge = styled.span`
  width: 30px;
  padding: 0px 5px;
  border-radius: 5px;
  background-color: rgba(45, 67, 82, .5);
`;