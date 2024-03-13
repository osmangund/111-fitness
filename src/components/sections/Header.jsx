import styled from "styled-components"
import { motion } from "framer-motion"
import { ChevronDown } from "../../assets/icons/ChevronDown"

const StyledHeader = styled(motion.header)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fafafa;

  .text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1.title {
    font-size: 3.5rem;
    margin: 0;
    color: #fcfcfc;
    filter: drop-shadow(0 0 0.8rem black);
  }

  h2.title {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }

  .title.gradient {
    background-image: linear-gradient(to bottom, gray, white);
    background-image: radial-gradient(
      120.96% 120.96% at 50% -20.96%,
      #696969 0%,
      hsla(0, 0%, 100%, 0.78) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .button {
    color: #fcfcfc;
    text-decoration: none;
    border-radius: 3px;
    padding-block: 0.5rem;
    padding-inline: 1rem;
    border: 1px solid gray;
    letter-spacing: -0.1px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
  }

  .scroll-down {
    position: absolute;
    bottom: 1rem;
    svg {
      width: 48px;
      height: 48px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    h1.title {
      font-size: 3rem;
    }
    h2.title {
      font-size: 1rem;
    }
    a.button {
      font-size: 0.8rem;
      padding: 0.5rem;
      letter-spacing: 0;
    }
  }
`

const StyledHeaderBg = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.3;

  background-image: url(images/header.jpg);
  background-size: cover;
  background-attachment: fixed;

  z-index: -3;
`

function HeaderBg() {
  return <StyledHeaderBg />
}

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
}

const textVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,

    transition: { duration: 2 },
  },
}

const headerBgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.3,
  },
}

function HeaderText() {
  return (
    <motion.div
      className="text-wrapper"
      variants={textVariants}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
    >
      <motion.h1 className="title" variants={textVariants}>
        Welcome to 111 Fitness.
      </motion.h1>
      <motion.h2 className="title gradient" variants={textVariants}>
        Where workout, community and creativity meet.
      </motion.h2>
      <motion.a
        href="#schedule"
        className="button"
        variants={textVariants}
        whileHover={{
          letterSpacing: 0,
          borderColor: "rgb(255, 255, 255)",
          transition: { duration: 0.3 },
        }}
      >
        Schedule a visit now
      </motion.a>
    </motion.div>
  )
}

function ScrollDownIcon() {
  return (
    <motion.div
      className="scroll-down"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          repeat: Infinity,
          ease: "easeInOut",
          duration: 0.75,
          repeatType: "reverse",
        },
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <ChevronDown />
    </motion.div>
  )
}

export default function Header() {
  return (
    <StyledHeader
      variants={headerVariants}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
    >
      <HeaderBg
        variants={headerBgVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      <HeaderText />
      <ScrollDownIcon />
    </StyledHeader>
  )
}
