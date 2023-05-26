import styled from 'styled-components'

export const HeroMobile = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1040px) {
    display: none;
  }
`
export const HeroDesktop = styled.div`
  @media (max-width: 1040px) {
    display: none;
  }
`

export const MobileBox = styled.div`
  display: grid;
  place-items: center;
  min-width: 100%;
  min-height: 100px;
`
export const MobileCompartments = styled.div`
  min-height: 50px;
  max-width: 600px;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 8px;
`
export const MobileBigBox = styled.div`
  display: grid;
  place-items: center;
  padding: 2rem 0;
`
