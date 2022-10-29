import styled from 'styled-components'

export const Main = styled.div`
  /* height: 100vh; */
  /* position: absolute; */
`
export const DropDownContainer = styled.div`
  min-width: min-content;
  margin: 0 auto;
`

export const ProjectNameDiv = styled.div`
  display: grid;
  place-items: center;
  user-select: none;
  padding-right: 0.5rem;
  border-right: 1px solid var(--background-blur2);
  min-width: 92px;
`
export const ProjectDropDownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background-blur1);
  border-radius: 12px;
  padding: 0.2rem 0.4rem 0.2rem 0.5rem;
  box-shadow: var(--boxShadowNone);
  /* color: var(--background4-main); */
  /* 
  background: transparent; */
  &:hover {
    color: var(--background4-main);
    box-shadow: var(--boxShadow1);
    /* background: transparent; */
    svg {
      color: var(--background-secondary1);
    }
  }

  width: 130px;
  gap: 0.5rem;
  /* width: 120px; */
  /* align-items: center; */
  font-size: 0.75rem;
  @media (max-width: 1020px) {
    font-size: 0.75rem;
    font-weight: 800;
  }
  @media screen and (max-width: 770px) {
    width: 100px;
    /* justify-content: flex-start; */
  }
  @media screen and (max-width: 400px) {
    width: 70px;
  }
`
export const DropDownHeader = styled.div`
  display: grid;
  place-items: center center;
  min-width: 15px;
  /* padding: 0.2rem 0.4rem 0.2rem 0.5rem; */
  font-weight: 500;
  font-size: 1.3rem;
  color: var(--background4-main);
  /* color: var(--background-secondary2); */
  /* background: var(--background1-main); */
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
  /* text-transform: lowercase; */
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
  /* position: relative; */
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
  /* top: 60px;
  right: 0%; */
  /* right: 140px; */
  transition: all 0.3s ease-out;
  text-align: center;
  background: var(--background1-main);
  svg {
    color: var(--background2-main);
  }
  @media screen and (max-width: 1440px) {
    right: 140px;
  }
  @media screen and (max-width: 1440px) {
    right: 120px;
  }
  @media screen and (max-width: 1090px) {
    right: 90px;
  }
  @media screen and (max-width: 780px) {
    right: 40px;
  }
  @media screen and (max-width: 590px) {
    right: 30px;
  }
`

export const ProjectDownList = styled.div`
  display: flex;
  flex-direction: column;
  /* box-sizing: border-box; */
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
  color: var(--background-secondary2);
  font-size: 1rem;
  font-weight: 400;
  min-width: fit-content;
  &:first-child {
    padding-top: 0.5rem;
  }
  /* &:last-child {
    padding-bottom: 0.25rem;
  } */
`
// export const ListItem = styled.li`

export const ListItem = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  min-width: 100px;

  /* list-style: none; */
  /* min-width: fit-content; */
  /* padding-left: 0.75rem;  */
  padding-bottom: 0.5rem;

  /* margin-bottom: 1rem; */
  &:last-child {
    /* margin-bottom: 0.5rem; */
  }
`
export const ProjectListItem = styled(ListItem)`
  padding-left: 0.75rem;
`
