import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:400,700&display=swap');
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }
  body{
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font:14px sans-serif;
  }
  button {
    cursor:pointer
  }
`;
