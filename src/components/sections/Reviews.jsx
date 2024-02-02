import styled from "styled-components"
import Smile from "../icons/Smile"
import { motion } from "framer-motion"
import PropTypes from "prop-types"

const Section = styled.section`
  min-height: 60vh;
  background-color: white;
  color: black;
  padding: 3rem 3rem;

  h1 {
    font-size: 3rem;
    text-align: center;
    margin: 0 0 2.5rem 0;
  }
  .reviews-wrapper {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    .review {
      flex: 1;
      margin: 1rem 0;
      padding: 1rem;
      border: 1px solid black;
      border-radius: 10px;
      font-size: 1.2rem;
      font-style: italic;
      font-weight: 300;
      h3,
      p {
        margin: 0;
      }
      h3 {
        font-weight: 500;
      }
      p {
        font-weight: 300;
      }
    }
  }
  .smile-icon {
    width: 96px;
    height: 96px;
    margin: 0 auto;
    display: block;
    rotate: 16.18deg;
    path {
      fill: black;
    }
  }
`

const smileVariants = {
  hidden: { rotate: 0, x: -100, y: -300, opacity: 0 },
  visible: {
    rotate: [0, 0, 0, 0, 0, 16.18],
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 1 },
  },
}

const reviewVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Review = ({ children }) => {
  return (
    <motion.div className="review" variants={reviewVariants}>
      {children}
    </motion.div>
  )
}

export default function Reviews() {
  return (
    <Section id="reviews">
      <h1>What our guests say</h1>
      <motion.div
        className="icon-wrapper"
        variants={smileVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Smile className="smile-icon" />
      </motion.div>
      <motion.div
        className="reviews-wrapper"
        variants={reviewVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ childrenStagger: 1 }}
        viewport={{ once: true }}
      >
        <Review>
          <h3>E.G</h3>
          <p>
            &quot;This gym is amazing. Amazing facility, top equipment and great
            environment. Good service with friendly staff and super clean and
            comfortable gym for everyone from beginners to professional athletes
            to train at. I will definitely be returning on my next trip.&quot;
          </p>
        </Review>
        <Review>
          <h3>V.T</h3>
          <p>
            &quot;This is a fantastic gym!! All the trainers are super nice and
            take an interest in you no matter what fitness level you&apos;re at.
            I really like how they give me tips and tricks to get the most out
            of every workout. I&apos;ve been going for a little bit and am
            already seeing a big change in my energy levels and body. It&apos;s
            great! I feel 10 years younger!&quot;
          </p>
        </Review>
        <Review>
          <h3>S.A</h3>
          <p>
            &quot;By far the best facility around. This new location is mint
            from the staff, to the equipment, to the facility itself. From the
            ownership, to management, to the trainers, by far the nicest and
            most knowledgeable staff in the business today. I wouldn&apos;t
            hesitate to recommend to anyone. I am certainly satisfied thus far
            and have been blown away by my experience at this new
            facility.&quot;
          </p>
        </Review>
      </motion.div>
    </Section>
  )
}

Review.propTypes = {
  children: PropTypes.node,
}
