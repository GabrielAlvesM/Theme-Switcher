import { createGlobalStyle } from "styled-components";
import { shade } from 'polished'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${(props) => props.theme.colors.background};
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
    font-family: sans-serif;
  }

  .content-box{
    justify-content: center;
    padding: 2.5rem;
    margin: 5rem 10rem;
    max-width: 80rem;
    -webkit-box-shadow: 6px 9px 8px 0px rgba(0,0,0,0.27);
    background: ${(props) => shade (0.1, props.theme.colors.background)};
  }

  .content-box p {
    text-align: justify;
    margin-top: 10px;
  }

`;
