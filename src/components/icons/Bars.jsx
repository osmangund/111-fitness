import styled from "styled-components"

export const StyledSvg = styled.svg`
  width: 32px;
  height: 32px;
  align-self: center;
  cursor: pointer;
  display: none;
  path {
    fill: ${({ theme }) => theme.colors.darkText};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }
`
export function Bars(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
      id="bars"
    >
      <path
        fill="#eaeaea"
        fillRule="evenodd"
        d="M2 2.75A.75.75 0 0 1 2.75 2h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 2.75m0 10.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75m0-7a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.25m0 3.5A.75.75 0 0 1 2.75 9h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75"
        clipRule="evenodd"
      ></path>
    </StyledSvg>
  )
}
