import styled from "styled-components"
import { motion } from "framer-motion"
import Card from "../Card"

const Section = styled(motion.section)`
  min-height: 100vh;
  background-color: black;
  color: white;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  margin-block-start: 4rem;
  margin-block-end: 2rem;
  padding-inline: 6rem;

  h1 {
    font-size: 2.4rem;
  }
  p {
    font-size: 1.2rem;
    margin-block-end: 1.5rem;
  }
  img {
    width: 100%;
    height: 40%;
    object-fit: cover;
    border-radius: 10px;
  }

  .card:nth-child(1) {
    grid-area: 1 / 1 / 3 / 3;
    img {
      object-position: bottom;
    }
  }
  .card:nth-child(2) {
    grid-area: 3 / 1 / 6 / 3;
    img {
      object-position: top;
    }
  }
  .card:nth-child(3) {
    grid-area: 2 / 4 / 4 / 6;
    width: 100%;
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
      height: 6vh;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-inline: 2rem;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
  }
`

export default function Info() {
  return (
    <Section id="info">
      <Card src="images/personal-trainer.jpg">
        <h1>Personal Training</h1>
        <p>
          Achieve your dream body by working with one of our expert personal
          trainers. Your trainer will create a customized plan for your needs,
          and help you on each and every step.
        </p>
      </Card>
      <Card src="images/cardio.jpg">
        <h1>Cardio Training</h1>
        <p>
          Our cardio training area is filled with top of the line treadmills,
          ellipticals, bikes, and more! We have everything you need to get your
          heart rate up, and your body moving.
        </p>
      </Card>
      <Card src="images/bench-press.jpg">
        <h1>Strength Training</h1>
        <p>
          Unlock your true strength. 111 Fitness offers dumbbells up to 60kgs,
          olympic plates, olympic barbells and strength machines. Designed for
          you.
        </p>
      </Card>
    </Section>
  )
}
