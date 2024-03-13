import { createGlobalStyle } from "styled-components"

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: black;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyles
