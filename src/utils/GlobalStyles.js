import styled, { createGlobalStyle, css } from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const GlobalStyles = createGlobalStyle`
  h1, h2, h3, h4, h5, h6, p, a, span {
    font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: ${ props => props.theme.baseFontColor };
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  li {
    list-style-type: none;
    margin: 0 20px;
  }
`;

const Link = ({ children, isactive, ...props }) => {
  return(
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

export const LinkStyled = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    font-family: "Avenir Next", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: ${ props => props.theme.baseFontColor };
    ${onIsActiveLink}
`;