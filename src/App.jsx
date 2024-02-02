import Navbar from "./components/Navbar"
import Contact from "./components/sections/Contact"
import Info from "./components/sections/Info"
import InfoWBackground from "./components/sections/InfoWBackground"
import Photos from "./components/sections/Photos"
import Reviews from "./components/sections/Reviews"
import ScheduleVisit from "./components/sections/ScheduleVisit"
import Header from "./components/sections/header"

import GlobalStyles from "./components/styles/Global"

export default function App() {
  return (
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
  )
}
