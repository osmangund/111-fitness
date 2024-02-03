import styled from "styled-components"

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 6rem;
  gap: 2rem;

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
  }
  p {
    position: relative;
    font-size: 1.3rem;
    font-weight: 300;
    text-indent: 1rem;
  }
  .highlight {
    color: #e8a05e;
    text-shadow: 1px 1px black;
  }
`

export default function InfoWBackground() {
  return (
    <Section id="personalized-workouts">
      <h1>Personalized workouts.</h1>
      <p>
        At 111 Fitness, our expertly curated workout routines are designed to
        bring out the best in you, focusing on your{" "}
        <span className="highlight">individual goals</span> and needs each week.
        Choose your preferred schedule, show up ready to sweat, and let us{" "}
        <span className="highlight">handle the rest</span>. Our dedicated team
        is committed to guiding you through a fitness journey that&apos;s as{" "}
        <span className="highlight">unique</span> as you are.
      </p>
      <h1>Fresh space for everyone.</h1>
      <p>
        Enough space for you to gain your dream body while socializing. Your
        local studio is 3000 square feet (~300m²).
      </p>
    </Section>
  )
}
