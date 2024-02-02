import { createGlobalStyle } from "styled-components"

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap");

  :root {
    font-family: "Space Grotesk", system-ui, Avenir, Helvetica, Arial,
      sans-serif;
    line-height: 1.5;
    font-weight: 400;

    font-synthesis: none;
    overflow-x: hidden;
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
