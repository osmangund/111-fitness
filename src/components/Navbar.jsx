import styled from "styled-components"
import Instagram from "./icons/Instagram"
import Facebook from "./icons/Facebook"
import { motion } from "framer-motion"
import { Bars } from "./icons/Bars"
import { useEffect } from "react"

const Nav = styled(motion.nav)`
  position: fixed;
  z-index: 2;
  top: -50%;
  transition: 350ms ease-in-out;
  &.show {
    top: 0;
  }
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 6rem;
  background-color: black;
  min-height: 40px;

  a {
    text-decoration: none;
  }
  .logo {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
  }
  ul {
    display: flex;
    gap: 2rem;
    list-style: none;

    li {
      a {
        color: white;
        text-decoration: none;
        font-size: 1.2rem;

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
      top: 50px;
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
      li {
        a {
          font-size: 1.5rem;
        }
      }
    }

    #mobile-checkbox:checked ~ ul {
      left: 0;
    }

    #bars {
      display: block;
      path {
        fill: white;
      }
    }
  }
`

const navVariants = {
  hidden: { y: -100 },
  animate: { y: 0, transition: { delay: 0.3, duration: 1 } },
  whileInView: { y: 0, transition: { duration: 1 } },
}

export default function Navbar() {
  let prevScrollPos = window.scrollY

  useEffect(() => {
    if (window.scrollY < 10) {
      const nav = document.querySelector("nav")
      nav.classList.add("show")
    }
  }, [])

  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav")
    const currentScrollPos = window.scrollY

    prevScrollPos > currentScrollPos
      ? nav.classList.add("show")
      : nav.classList.remove("show")

    prevScrollPos = currentScrollPos
  })

  return (
    <Nav
      variants={navVariants}
      initial="hidden"
      whileInView="whileInView"
      animate="animate"
    >
      <a className="logo" href="/">
        111®
      </a>
      <input type="checkbox" name="mobile-checkbox" id="mobile-checkbox" />
      <label htmlFor="mobile-checkbox">
        <Bars />
      </label>
      <ul>
        <li>
          <a href="#info">Info</a>
        </li>
        <li>
          <a href="#fromyou">From You</a>
        </li>
        <li>
          <a href="#schedule">Schedule A Visit</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="socials">
        <a href="#">
          <Facebook />
        </a>
        <a href="#">
          <Instagram />
        </a>
      </div>
    </Nav>
  )
}
