import PropTypes from "prop-types"
import { useEffect } from "react"
import styled from "styled-components"

const BlurLoadDiv = styled.div`
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;

  img {
    object-position: center;
    object-fit: cover;
    opacity: 0;
  }

  &.loaded {
    img {
      opacity: 1;
      transition: opacity 200ms ease-in-out;
    }
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    animation: pulse 2s infinite;
  }
  &.loaded::before {
    content: none;
  }

  @keyframes pulse {
    0% {
      background-color: rgba(255, 255, 255, 0);
    }
    50% {
      background-color: rgba(255, 255, 255, 0.1);
    }
    100% {
      background-color: rgba(255, 255, 255, 0);
    }
  }
`

export default function Image({ src, alt, ariaHidden = false }) {
  let blurLoadImg = src.replace(/\.jpg$/, "-small.jpg")

  useEffect(() => {
    const blurDivs = document.querySelectorAll(".blur-load")
    blurDivs.forEach((div) => {
      const img = div.querySelector("img")
      function loaded() {
        div.classList.add("loaded")
      }
      if (img.complete) {
        loaded()
      } else {
        img.addEventListener("load", loaded)
      }
    })
  })

  return (
    <BlurLoadDiv
      className="blur-load"
      style={{ backgroundImage: `url(${blurLoadImg})` }}
    >
      <img src={src} alt={alt} aria-hidden={ariaHidden} loading="lazy" />
    </BlurLoadDiv>
  )
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  ariaHidden: PropTypes.bool,
}
