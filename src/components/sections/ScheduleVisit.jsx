import styled from "styled-components"

const Section = styled.section`
  display: flex;
  justify-content: center;
  background-color: white;
  color: black;
  min-height: 80vh;
  padding: 8rem 2rem;
  position: relative;
`

const InfoWrapper = styled.div`
  width: 40%;
  padding-right: 2rem;
`
const H1 = styled.h1`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 3rem;
  margin: 0;
`
const P = styled.p`
  font-size: 1.3rem;
`
const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  label {
    font-size: 1.2rem;
  }
  input {
    background-color: #fafafa;
    border: 1px solid black;
    font: inherit;
    font-size: 1.125rem;
    padding: 0.25rem;

    &:focus {
      padding-bottom: 5px;
    }
    &#date {
      width: 50%;
    }
    &.submit {
        align-items: center;
        appearance: none;
        background-color: #fff;
        border-radius: 24px;
        border-style: none;
        box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
          rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
        box-sizing: border-box;
        color: #3c4043;
        cursor: pointer;
        font-size: 14px;
        height: 48px;
        width: 35%;
        letter-spacing: 0.25px;
        &:hover {
          background: #f6f9fe;
          color: #174ea6;
        }
      }
    }
  }
`
const NameWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  * {
    flex: 1;
  }
  input {
    width: 100%;
  }
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export default function ScheduleVisit() {
  return (
    <Section id="schedule">
      <InfoWrapper>
        <H1>Schedule a visit</H1>
        <P>
          Take a free 30-minute tour of your 111 Fitness. You&apos;ll have the
          opportunity to try equipment, observe classes, and get direct answers
          to all of your questions.
        </P>
      </InfoWrapper>
      <Form>
        <NameWrapper>
          <InputWrapper>
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" required />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname" required />
          </InputWrapper>
        </NameWrapper>
        <InputWrapper>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="date">Date</label>
          <input type="date" name="Date" id="date" required />
        </InputWrapper>
        <input type="submit" value="Submit" name="submit" className="submit" />
      </Form>
    </Section>
  )
}
