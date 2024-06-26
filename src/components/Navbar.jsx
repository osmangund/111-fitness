import styled from "styled-components"
import Instagram from "../assets/icons/Instagram"
import Facebook from "../assets/icons/Facebook"
import { motion } from "framer-motion"
import { Bars } from "../assets/icons/Bars"
import { useEffect, useState } from "react"

const Nav = styled(motion.nav)`
  position: fixed;
  z-index: 2;
  transition: 350ms ease-in-out;
  &.hide {
    top: -50%;
  }

  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10rem;
  background-color: black;
  /* min-height: 40px; */
  a {
    text-decoration: none;
  }
  .logo {
    color: white;
    font-size: 1.4rem;
    font-weight: 100;
    padding: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
  }
  ul {
    display: flex;
    gap: 14rem;
    list-style: none;

    #nav-links {
      display: flex;
      gap: 2rem;
    }

    li {
      a {
        color: white;
        text-decoration: none;
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 200;
        &:hover {
          color: #ccc;
        }
      }
    }
  }
  .socials {
    display: flex;
    gap: 1rem;
    a {
      cursor: pointer;
      svg {
        width: 24px;
        height: 24px;
      }
    }
  }

  #bars,
  input[type="checkbox"] {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0 2rem;
    a.logo {
      font-size: 1.2rem;
    }

    ul {
      position: fixed;
      top: 30px;
      left: -100%;

      width: 100%;
      height: 100vh;

      gap: 5rem;
      flex-direction: column;
      justify-content: center;
      background-color: black;
      text-align: center;
      padding: 1rem 0;

      z-index: 1;
      transition: all 0.5s;

      #nav-links {
        flex-direction: column;
      }
      .socials {
        align-items: center;
        justify-content: center;
      }
      li {
        a {
          font-size: 1.2rem;
        }
      }
    }

    .showUl {
      left: 0;
    }

    /* #mobile-checkbox:checked ~ ul {
      left: 0;
    } */

    #bars {
      display: block;
      path {
        fill: white;
      }
    }
  }
`
export default function Navbar() {
  let prevScrollPos = window.scrollY
  const [ulShowing, setUlShowing] = useState(false)

  useEffect(() => {
    if (window.scrollY > 10) {
      const nav = document.querySelector("nav")
      nav.classList.add("hide")
    }
  }, [])

  useEffect(() => {
    const ul = document.querySelector("ul")
    const mobileCheckbox = document.querySelector("#mobile-checkbox")

    const handleChange = () => {
      setUlShowing(!ulShowing)
    }

    const handleClick = () => {
      setUlShowing(false)
    }

    mobileCheckbox.addEventListener("change", handleChange)
    ul.addEventListener("click", handleClick)

    return () => {
      mobileCheckbox.removeEventListener("change", handleChange)
      ul.removeEventListener("click", handleClick)
    }
  }, [ulShowing])

  useEffect(() => {
    const ul = document.querySelector("ul")

    if (ulShowing) {
      ul.classList.add("showUl")
    } else {
      ul.classList.remove("showUl")
    }
  }, [ulShowing])

  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav")
    const currentScrollPos = window.scrollY

    prevScrollPos < currentScrollPos
      ? nav.classList.add("hide")
      : nav.classList.remove("hide")

    prevScrollPos = currentScrollPos
  })

  return (
    <Nav>
      <a className="logo" href="/fitness-website/">
        111®
      </a>
      <input type="checkbox" name="mobile-checkbox" id="mobile-checkbox" />
      <label htmlFor="mobile-checkbox">
        <Bars />
      </label>
      <ul>
        <div id="nav-links">
          <li>
            <a href="#info">Info</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
          <li>
            <a href="#fromyou">From You</a>
          </li>
          <li>
            <a href="#schedule">Visit Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </div>
        <div className="socials">
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Instagram />
          </a>
        </div>
      </ul>
    </Nav>
  )
}
