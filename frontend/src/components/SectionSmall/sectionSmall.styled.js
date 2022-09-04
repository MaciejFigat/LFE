import styled from 'styled-components'
import { handleSectionColor } from './utils'

export const SectionContainer = styled.div`
  height: 20vh;
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  place-items: center;
  flex-direction: column;
  ${(props) => handleSectionColor(props).color}
  ${(props) => handleSectionColor(props).containerBackground}
  justify-content: center;
  @media (max-width: 880px) {
    flex-direction: column;
  }
`

export const SectionTitle = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin: 1rem;
  &:after {
    content: '';
    display: block;
    position: relative;
    bottom: -10px;
    left: -10%;
    width: 120%;
    @media (max-width: 880px) {
      width: 100%;
      left: 0%;
    }
    height: 10px;
    --angle: 0deg;
    border-bottom: 2px solid;
    /* animated border-image */
    ${(props) => handleSectionColor(props).gradient}
  }
`
export const SectionDescription = styled.p`
  font-size: 1.25rem;
`
