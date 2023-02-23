import { createGlobalStyle } from 'styled-components';
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