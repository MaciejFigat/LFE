import styled from 'styled-components'
import { motion } from 'framer-motion'

export const TransitionWrapperMain = styled.div`
  position: sticky;
  z-index: 20;
  top: -2px;
  transition: color 1200ms ease-out;
  svg {
    color: var(--background5-main);
    :hover {
      transition: color 300ms ease-out;
      color: var(--background-secondary2);
    }
  }
  .nav_link {
    transition: color 600ms ease-out;
    /* color: var(--background-main5); */
  }
  .top {
    transition: all 1000ms ease-in;
    transition: color 1200ms ease-out;
    transition: background 1200ms ease-out;

    background: var(--background1-main);
    .nav_link {
      color: var(--background5-main);
    }
  }
  .active {
    transition: all 600ms ease-in;

    background: var(--background1-main);
  }
  .active.open {
    transition: all 600ms ease-in;
  }

  .open.top {
    transition: all 300ms ease-in;
    /* background for the scrolling div with navlist in it */

    /* background for testing resolutions */

    .burger {
      background: var(--background5-main);
    }
  }
  .hidden {
    svg {
      /* color: red; */
      color: var(--background5-main);
    }
    transition: all 200ms ease-in;
    transform: translateY(-130%);
    //todo where is the violet color ?

    color: var(--background5-main);
  }
`
export const TransitionWrapper = styled.div`
  position: sticky;
  top: 0;
  /* //! irritating gap holy grail no 2 */
  /* max-height: 3.4rem; */
  height: 57px;
  @media (min-width: 1020px) {
    display: flex;
    justify-content: center;
  }
`
export const NavContainer = styled.nav`
  max-width: 1020px;
  min-height: fit-content;
  @media (min-width: 2220px) {
    max-width: 2000px;
  }
`
// the following list is used for desktop navigation
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  margin: 0;
  justify-content: space-around;
  padding: 0;
  min-width: 50vw;
  @media (min-width: 1820px) {
    justify-content: space-evenly;
    min-width: 30vw;
  }
  @media (max-width: 1020px) {
    width: 100%;
    position: sticky;
    top: 0;
    height: calc(100vh - 50px);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-height: 85vh;
    max-width: 50vw;
    min-width: fit-content;
    padding-bottom: 3rem;
    gap: 1.75rem;
  }
  @media (max-width: 1020px) and (orientation: landscape) {
    margin-top: 1rem;
    padding-bottom: 1.75rem;
    gap: 0.75rem;
  }
  @media (max-width: 400px) {
    margin-top: 0rem;
  }
`
export const ListLoginWrapper = styled.div`
  @media (max-width: 1020px) {
    display: none;
  }
`
export const HeaderLoginWrapper = styled.div`
  display: flex;
  gap: 2rem;
  @media (min-width: 1020px) {
    display: none;
  }
`

export const MobileSvgDiv = styled.div`
  min-height: 100%;

  li {
    color: var(--background-secondary2) !important;
    transition: color 300ms ease-out;

    &:hover {
      color: var(--background2-main) !important;
    }
  }
`
// export const ListItem = styled.li`
export const ListItem = styled(motion.div)`
  margin-right: 1rem;
  font-size: 1.05rem;
  letter-spacing: 0.075em;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  /* align-items: center; */
  text-transform: uppercase;
  color: var(--background5-main);
  @media (max-width: 1020px) {
    flex-direction: column;
    align-content: flex-start;
    font-size: 2.55rem;
    margin-right: 0.25rem;
    margin-left: 1.25rem;
    font-weight: 800;
    /* @media screen and (orientation: landscape) { */
    @media (max-width: 700px) and (orientation: landscape) {
      font-size: 1.55rem;
    }
  }
`

export const ListItemMobile = styled.div`
  font-weight: 500;
  display: none;
  font-size: 1.25rem;
  margin-right: 0.25rem;
  color: var(--background5-main);
  margin: 0;
  flex-direction: column;
  gap: 2rem;
  padding: 0.5rem;
  @media (max-width: 1020px) {
    align-items: left;
    display: flex;
    margin-left: 0.5rem;
  }
`
// TODO here lies the background property of the holy grail. Meaning the container that shows when scrolling top.

export const MobileViewContainer = styled.div`
  display: none;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1.5rem 0 1rem;
  /* this below fixes the irritating gap in nav when you scroll it down */
  /* margin-top: -1px !important; */
  @media (max-width: 1020px) {
    display: flex;
  }
`
export const HeaderTitleMobile = styled.h1`
  color: var(--background1-main);
  font-size: 1.75rem;
  font-weight: 400;
  display: none;

  max-width: fit-content;
  @media (max-width: 1020px) {
    display: block;
    font-size: 1.25rem;
  }
`
export const WrapperDesktopOnly = styled.div`
  display: flex;
  /* max-width: fit-content; */
  @media (max-width: 1020px) {
    display: none;
    font-size: 1.25rem;
  }
`
export const HeaderTitleDesktop = styled.h1`
  font-size: 1.25rem;
  font-weight: 200;
  margin: 0;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  transition: all 200ms ease-in;
  &.show {
    transition: all 200ms ease-in;
    color: var(--background1-main);
  }
  &.hide {
    transition: all 300ms ease-in;
    color: var(--background3-main);
  }
  @media (max-width: 1020px) {
    display: none;
  }
`
export const AnimatedWrapperMobile = styled(motion.div)`
  //todo
  background: var(--background1-main);
  width: 18.75rem;
  height: calc(100vh + 50px);
  display: none;
  @media (max-width: 1020px) {
    display: flex;
  }
`
export const NavListDesktopWrapper = styled.div`
  display: flex;
  @media (min-width: 1020px) {
    max-width: 1020px;
  }
  @media (max-width: 1020px) {
    display: none;
  }
`
