import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: ${`Roboto, Segoe UI, Oxygen, Ubuntu, Cantarell,Fira Sans, Droid Sans, Helvetica Neue, sans-serif, -apple-system,BlinkMacSystemFont`};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  }
`;

export default GlobalStyle;
