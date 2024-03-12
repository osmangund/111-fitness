import { createGlobalStyle } from "styled-components"

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap");

  @font-face {
    font-family: "Helvetica Neue";
    src: url("../assets/fonts/Helvetica Neue Regular.otf") format("otf");
  }

  :root {
    font-family: "Helvetica Neue", system-ui, Avenir, Helvetica, Arial,
      sans-serif;

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
