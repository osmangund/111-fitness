import styled from "styled-components"
import { motion } from "framer-motion"

const StyledHeader = styled(motion.header)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #fafafa;

  &,
  .title,
  .button {
    position: relative;
  }

  h1.title {
    font-size: 5rem;
    margin: 0;
    filter: drop-shadow(0 0 0.8rem black);
  }

  h2.title {
    margin-block: 2rem 3rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.3;

    background: url(./src/assets/header.jpg) no-repeat center center/cover;
    background-color: rgba(0, 0, 0, 0.5);
    background-attachment: fixed;
  }

  .button {
    color: white;
    text-decoration: none;
    border-radius: 10px;
    align-self: center;
    padding: 1rem;
    border: 1px solid white;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
  }
`

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 100, rotate: 5 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 1.32, staggerChildren: 0.3236 },
  },
}

export default function Header() {
  return (
    <StyledHeader
      variants={headerVariants}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
    >
      <motion.div
        className="text"
        variants={textVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <motion.h1 className="title" variants={textVariants}>
          Welcome to the 111 Fitness
        </motion.h1>
        <motion.h2 className="title" variants={textVariants}>
          Where workout, community and creativity meet.
        </motion.h2>
        <motion.a href="#schedule" className="button" variants={textVariants}>
          Schedule a visit
        </motion.a>
      </motion.div>
    </StyledHeader>
  )
}
