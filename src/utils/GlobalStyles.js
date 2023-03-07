import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6, p, a, span {
    font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: ${ props => props.theme.baseFontColor};
  }
  p {
    text-align: justify;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  li {
    list-style-type: none;
    margin: 0 20px;
  }
  img {
    width: 100%
  }
`;