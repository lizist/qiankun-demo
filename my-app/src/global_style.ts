import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{padding:0;margin:0;box-sizing:border-box}
  body {
    margin: 0;
    font-family: "Yu Gothic UI", "Yu Gothic", "Meiryo UI","Meiryo","Hiragino Sans GB", Helvetica, Arial, sans-serif;
  }
  div,dl,dt,dd,form,h1,h2,h3,h4,h5,h6,img,ol,ul,li,table,th,td,p,span,a{
      border:0;
    }
`;
