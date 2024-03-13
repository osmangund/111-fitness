import { motion } from "framer-motion"
import styled from "styled-components"

const Section = styled(motion.section)`
  padding: 6rem;
  color: whitesmoke;
  min-height: 80vh;
  position: relative;
  background: url(images/gym-area.jpg) no-repeat center center/cover;
  background-attachment: fixed;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }
  h1 {
    position: relative;
    font-size: 4rem;

    font-weight: 500;
    margin: 0;
    align-self: center;
    border-bottom: 2px solid white;
    display: inline-block;
    background-image: radial-gradient(
      120.96% 120.96% at 50% -60%,
      #696969 0%,
      hsla(0, 0%, 100%, 0.78) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  p {
    position: relative;
    font-size: 1.3rem;
    font-weight: 200;
    text-indent: 1rem;
  }
  .highlight {
    font-weight: bold;
    text-shadow: 1px 1px black;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 2rem;
    h1 {
      font-size: 2rem;
      border-bottom: none;
    }
    p {
      font-size: 1rem;
    }
  }
`

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const sectionVariants = {
  initial: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

const textVariants = {
  initial: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.96, staggerChildren: 0.25 },
  },
}

export default function InfoWBackground() {
  return (
    <Section
      id="personalized-workouts"
      variants={sectionVariants}
      initial="initial"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <Wrapper
        variants={textVariants}
        initial="initial"
        animate="visible"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div>
          <motion.h1 variants={textVariants}>Personalized workouts.</motion.h1>
          <motion.p variants={textVariants}>
            At 111 Fitness, our expertly curated workout routines are designed
            to bring out the best in you, focusing on your{" "}
            <span className="highlight">individual goals</span> and needs each
            week. Choose your preferred schedule, show up ready to sweat, and
            let us <span className="highlight">handle the rest</span>. Our
            dedicated team is committed to guiding you through a fitness journey
            that&apos;s as <span className="highlight">unique</span> as you are.
          </motion.p>
        </div>
        <div>
          <motion.h1 variants={textVariants}>
            Fresh space for everyone.
          </motion.h1>
          <motion.p variants={textVariants}>
            Enough space for you to gain your dream body while socializing. Your
            local studio is 3000 square feet (~300m²). We have a{" "}
            <span className="highlight">wide range of equipment</span> to suit
            your needs. Our{" "}
            <span className="highlight">clean and modern facilities</span> are
            designed to make you feel comfortable and motivated.{" "}
            <span className="highlight">Join us</span> and experience the
            difference for yourself.
          </motion.p>
        </div>
      </Wrapper>
    </Section>
  )
}
