import styled from "styled-components"
import Instagram from "./icons/Instagram"
import Facebook from "./icons/Facebook"

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 6rem;
  background-color: black;
  min-height: 100px;

  a {
    text-decoration: none;
  }
  .logo {
    color: white;
    font-size: 2rem;
    font-weight: bold;
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
`
export default function Navbar() {
  return (
    <Nav>
      <a className="logo" href="/">
        111 Fitness
      </a>
      <ul>
        <li>
          <a href="">Clubs</a>
        </li>
        <li>
          <a href="#fromyou">From You</a>
        </li>
        <li>
          <a href="#schedule">Schedule</a>
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
