import styled from "styled-components"
import { motion } from "framer-motion"
import Image from "../Image/Image"

const Section = styled.section`
  height: 100vh;
  display: flex;
  background-color: black;
  color: white;
  padding-inline-start: 3rem;
  .contact__info,
  .contact__photo {
    width: 50%;
  }
  .contact__info {
    h1 {
      font-size: 3rem;
      margin-block: 3rem 0.4rem;
      margin-inline: 0;
    }
    p {
      font-size: 1.5rem;
      font-weight: 300;
      margin: 0;
    }
    a {
      color: white;
      text-decoration: none;
    }
    .wgh-500 {
      font-weight: 500;
    }
  }
  .contact__photo {
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      max-height: 1024px;
      object-fit: cover;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0;
    flex-direction: column-reverse;
    .contact__info,
    .contact__photo {
      width: 100%;
    }
    .contact__info {
      text-align: center;
      h1 {
        font-size: 2rem;
        margin: 0;
        margin-block: 1rem;
      }
      p {
        font-size: 1rem;
      }
    }
    .contact__photo {
      img {
      }
    }
  }
`

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, staggerChildren: 0.4 },
  },
}
export default function Contact() {
  return (
    <Section id="contact">
      <motion.div
        className="contact__info"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.75 }}
      >
        <motion.h1 variants={variants}>Contact</motion.h1>
        <motion.p variants={variants}>
          <span className="wgh-500">111 Fitness Club</span>
          <br />
          1234/56 Gym St. No: 356
          <br />
          Gym City, Gym State 34000
          <br />
          (123) 456-7890
        </motion.p>
        <motion.h1 variants={variants}>Hours</motion.h1>
        <motion.p variants={variants}>
          <span className="wgh-500">Mon-Fri: </span>5AM - 11PM
        </motion.p>
        <motion.p variants={variants}>
          <span className="wgh-500">Sat-Sun: </span>7AM - 7PM
        </motion.p>
        <motion.h1
          initial={{ x: -400 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 2.75 }}
          viewport={{ once: true }}
        >
          Start today.
        </motion.h1>
        <motion.span variants={variants}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/osmangund"
            className="wgh-500"
          >
            osmangund®
          </a>{" "}
          2024. All rights reserved.
        </motion.span>
      </motion.div>
      <div className="contact__photo">
        <Image
          src="images/gym-inside4.jpg"
          alt="Reception of the fitness centre"
        />
      </div>
    </Section>
  )
}
