import styled, { css } from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

const Link = ({ children, isactive, ...props }) => {
  return (
    <ReactRouterLink {...props}>
      {children}
    </ReactRouterLink>
  )
}

const onIsActiveLink = ({ isactive }) => {
  if (isactive) {
    return css`
      border-bottom: 4px solid ${props => props.theme.themeColor}
    `
  }
}

const isButton = ({ isbutton }) => {
  if (isbutton === 'primary') {
    return css`
    min-width: 100px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: linear-gradient(87deg, rgba(173,62,242,1) 0%, rgba(204,153,236,0.9514399509803921) 100%);
    color: ${ props => props.theme.baseFontColor};
    margin: 20px;
    font-weight: 600;
    `;
  } else if (isbutton === 'secondary') {
    return css`
    min-width: 100px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: linear-gradient(87deg, rgba(28,239,160,1) 0%, rgba(153,236,205,0.9514399509803921) 100%);
    color: ${ props => props.theme.baseFontColor};
    margin: 20px;
    font-weight: 600;
    `
  } else if (isbutton === 'link') {
    return css`
    :visited {
      color: blue;
    }
  `
  }
}

export const LinkStyled = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    ${onIsActiveLink};
    ${isButton};
`;
