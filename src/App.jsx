import { ThemeProvider } from "styled-components"
import Navbar from "./components/Navbar"
import Contact from "./components/sections/Contact"
import Info from "./components/sections/Info"
import InfoWBackground from "./components/sections/InfoWBackground"
import Photos from "./components/sections/Photos"
import Reviews from "./components/sections/Reviews"
import ScheduleVisit from "./components/sections/ScheduleVisit"
import Header from "./components/sections/Header"
import GlobalStyles from "./styles/Global"

const theme = {
  colors: {
    primary: "#0070f3",
    lightText: "#babbcc",
    darkText: "#000018",
    accent: "#000018",
    goldText: "#e2a85e",
  },
  mobile: "768px",
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Navbar />
        <Info />
        <InfoWBackground />
        <Reviews />
        <Photos />
        <ScheduleVisit />
        <Contact />
      </>
    </ThemeProvider>
  )
}
