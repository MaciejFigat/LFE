import styled from 'styled-components'

export const Main = styled.div``
export const DropDownContainer = styled.div`
  min-width: min-content;
  margin: 0 auto;
`

export const ProjectNameDiv = styled.div`
  display: grid;
  place-items: center;
  user-select: none;
  padding: 0;
  padding-right: 0.5rem;
  border-right: 1px solid var(--background-blur2);
  min-width: 92px;
  letter-spacing: 0.075em;
  @media (max-width: 620px) {
    max-width: 50px;
    min-width: 50px;
    overflow: hidden;
    padding-left: 0.5rem;
  }
`
export const ProjectDropDownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background-blur1);
  border-radius: var(--border-radius2);
  height: 34px;
  padding: 0.2rem 0.4rem 0.2rem 0.5rem;
  box-shadow: var(--boxShadowNone);
  transition: 0.2s ease-in-out;
  &:hover {
    color: var(--background4-main);
    box-shadow: var(--boxShadow1);
    svg {
      color: var(--background-secondary1);
    }
  }
  width: 130px;
  gap: 0.5rem;
  font-size: 0.75rem;
  @media (max-width: 1020px) {
    font-size: 0.75rem;
    font-weight: 800;
  }
  @media (max-width: 620px) {
    width: 90px;
  }
`
export const DropDownHeader = styled.div`
  display: grid;
  place-items: center center;
  min-width: 15px;

  font-weight: 500;
  font-size: 1.3rem;
  color: var(--background4-main);
  transition: all 0.3s ease-out;
  text-align: center;
  svg {
    ${({ grey }) =>
      grey
        ? ' color: var(--background2-main);'
        : 'color: var(--background4-main);'}
    &:hover {
      ${({ grey }) => grey && 'color: var(--background3-main);'}
    }
  }
`
export const DropDownHeaderBig = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  user-select: none;
  height: 30px;
  border-radius: 12px;
  width: 150px;
  border: 1px solid var(--background-blur1);
  padding: 0.2rem 0.4rem 0.2rem 0.5rem;
  font-weight: 700;
  font-size: 0.75rem;
  color: var(--background4-main) !important;
  /* color: var(--background-secondary2); */
  /* background: var(--background1-main); */
  transition: all 0.3s ease-out;
  text-align: center;

  &:hover {
    background: var(--background4-main);
    color: var(--background1-main) !important;
  }
`
export const SvgWrapperColor = styled.div`
  position: relative;
  top: 2px;
  font-size: 0.95rem;
  svg {
    transition: 0.2s !important;
    color: var(--background3-main);
  }
  ${DropDownHeaderBig}:hover & {
    svg {
      color: var(--background1-main);
    }
  }
`

export const DropDownListContainer = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  z-index: 10;

  border-top: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  box-shadow: var(--boxShadow1);

  padding: 0.75rem;
  width: 166px;
  min-width: fit-content;
  border-radius: 12px;
  top: 60px;

  right:${({ wide }) => wide && '240px;'}
  transition: all 0.3s ease-out;
  text-align: center;
  background: var(--background1-main);

  svg {
    color: var(--background2-main);
  }
  @media screen and (max-width: 1440px) {
    right:${({ wide }) => wide && '140px;'}
  }
  @media screen and (max-width: 1440px) {
    right:${({ wide }) => wide && '120px;'}
  }
  @media screen and (max-width: 1090px) {
    right:${({ wide }) => wide && '90px;'}
  }
  @media screen and (max-width: 780px) {
    right:${({ wide }) => wide && '40px;'}
  }
  @media screen and (max-width: 590px) {
    right:${({ wide }) => wide && '30px;'}
  }
  @media (max-width: 520px) {
    width: 270px;
    right:${({ wide }) => wide && '20px;'}
    
    min-width: 0;
  }
  @media (max-width: 520px) {
    right: 10px;
  }

  
`
export const NavDropDownListContainer = styled(DropDownListContainer)`
  @media (min-width: 1200px) {
    left: 75%;
  }
  @media (min-width: 1320px) {
  }
  @media (min-width: 1620px) {
    left: 67%;
  }
  @media (min-width: 2420px) {
    left: 65%;
  }
`
export const ProjectDownList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  width: fit-content;
  color: var(--background5-main);
  background: none;
  padding: 0.5rem;
`
export const DropDownList = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  min-width: fit-content;
  &:first-child {
    padding-top: 0.5rem;
  }
`

export const ListItem = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  min-width: 100px;
  padding-bottom: 0.5rem;
`
export const ProjectListItem = styled(ListItem)`
  padding-left: 0.75rem;
`
