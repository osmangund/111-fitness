import styled from "styled-components"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import Card from "../Card"

const Section = styled.section`
  color: white;
  text-align: center;
  h1 {
    text-transform: uppercase;
    letter-spacing: -2px;
    font-size: 3rem;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`
const Cards = styled(motion.div)`
  height: 370vh;
  background-color: black;
  color: white;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(10, 1fr);
  margin-block: 6rem; // Navbar
  padding-inline: 6rem;

  h1 {
    color: white;
  }
  img {
    width: 100%;
    height: 40%;
    object-fit: cover;
    border-radius: 10px;
  }

  .card:nth-child(1) {
    grid-area: 1 / 1 / span 2 / span 2;
  }
  .card:nth-child(2) {
    grid-area: 2 / 4 / span 2 / span 2;
  }
  .card:nth-child(3) {
    grid-area: 5 / 1 / span 2 / span 2;
  }
  .card:nth-child(4) {
    grid-area: 6 / 4 / span 2 / span 2;
  }
  .card:nth-child(5) {
    grid-area: 8 / 1 / span 2 / span 2;
  }
  .card:nth-child(6) {
    grid-area: 8 / 1 / span 2 / span 2;
  }

  .card__img {
    position: relative;
    &::after {
      content: "111®";
      font-size: 0.8rem;
      text-align: center;
      position: absolute;
      vertical-align: middle;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 4vh;
    }
    span {
      display: inline-block;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding-inline: 2rem;
  }
`
const letterByLetterTextAnimations = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
}

const AnimatedText = (props) => {
  const { Wrapper, text } = props
  return (
    <Wrapper>
      {console.log(props.text)}
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        variants={letterByLetterTextAnimations}
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.08 }}
        viewport={{ once: true, amount: 1, threshold: 1 }}
      >
        {text.split("").map((char, i) => {
          return (
            <motion.span variants={letterByLetterTextAnimations} key={i}>
              {char}
            </motion.span>
          )
        })}
      </motion.span>
    </Wrapper>
  )
}

export default function Photos() {
  return (
    <Section id="fromyou">
      <AnimatedText text="From you" Wrapper="h1" />

      <Cards id="cards">
        <Card src="images/trainee.jpg" />
        <Card src="images/trainee2.jpg" />
        <Card src="images/trainee3.jpg" />
        <Card src="images/trainee4.jpg" />
        <Card src="images/trainee5.jpg" />
      </Cards>
    </Section>
  )
}

AnimatedText.propTypes = {
  Wrapper: PropTypes.string,
  text: PropTypes.string,
}
