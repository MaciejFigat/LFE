import styled from 'styled-components'
import { motion } from 'framer-motion'

export const TransitionWrapperMain = styled.div`
  display: grid;
  place-items: center;
  position: sticky;
  z-index: 20;
  top: -2px;
  transition: color 1200ms ease-out;
  svg {
    color: var(--background5-main);
    :hover {
      transition: color 300ms ease-out;
      color: var(--background4-main);
    }
  }
  .nav_link {
    transition: color 600ms ease-out;
  }
  .top {
    transition: all 1000ms ease-in;
    transition: color 1200ms ease-out;
    transition: background 1200ms ease-out;

    background: var(--background1-main);
    .nav_link {
    }
  }
  .active {
    transition: all 600ms ease-in;
    border-bottom: 1px solid var(--background-blur2);
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
      color: var(--background5-main);
    }
    transition: all 200ms ease-in;
    transform: translateY(-130%);
    //todo where is the violet color ?

    color: var(--background4-main);
  }
`
export const TransitionWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1750px;
  border-left: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);

  height: 67px;
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
export const MobileNavContainer = styled.nav``
// the following list is used for desktop navigation

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  margin: 0;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  /* min-width: 50vw; */
  min-width: 30vw;
  @media (min-width: 1820px) {
    justify-content: space-evenly;
    min-width: 35vw;
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
  @media (max-width: 550px) {
    justify-content: center;
    background: red !important;
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
export const MobileIconsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 540px) {
    min-width: 70vw;
    /* background: lime; */
    justify-content: flex-end;
  }
  @media (max-width: 330px) {
    min-width: 85vw;
  }
`
export const MobileNavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  top: 110px;
  gap: 0.55rem;

  @media (max-width: 520px) {
    justify-content: space-around;
    min-width: 100vw;
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
  margin: 0;
  padding: 0;
  li {
    color: var(--background5-main) !important;
    transition: color 300ms ease-out;

    &:hover {
      color: var(--background2-main) !important;
    }
  }
`

export const ListItem = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 1rem;
  font-size: 1.05rem;
  letter-spacing: 0.075em;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 1020px) {
    flex-direction: column;
    align-content: flex-start;
    font-size: 1.15rem;
    margin-right: 0.25rem;
    margin-left: 1.25rem;
  }
  @media (max-width: 620px) {
    margin-right: 0.25rem;
    margin-left: 0.25rem;
  }
`

export const ListItemMobile = styled.div`
  font-weight: 500;
  display: none;
  font-size: 1.25rem;
  margin-right: 0.25rem;
  color: var(--background4-main);
  margin: 0;
  flex-direction: column;
  text-transform: uppercase;
  gap: 2rem;

  @media (max-width: 1020px) {
    display: flex;
    margin-left: 1.1rem;
    align-items: center;
    justify-content: center;
    background: brown;
  }
  @media screen and (max-width: 770px) {
    padding: 0;
    gap: 0.25rem;
  }
  @media (max-width: 360px) {
    display: flex;
    margin-left: 0.5rem;
    align-items: center;
    justify-content: center;
  }
`
// TODO here lies the background property of the holy grail. Meaning the container that shows when scrolling top.

export const MobileViewContainer = styled.div`
  display: none;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 1020px) {
    display: flex;
  }
`
export const HeaderTitleMobile = styled.h1`
  display: none;

  max-width: fit-content;

  @media (max-width: 1020px) {
    display: grid;
    place-items: center;

    font-size: 1.25rem;
  }
  @media (max-width: 600px) {
  }
`

export const WrapperDesktopOnly = styled.div`
  display: grid;
  place-items: center;
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
  background: var(--background1-main);
  width: 100%;
  height: 60px;
  display: none;
  position: absolute;

  border-bottom: 1px solid var(--background-blur1);
  top: 62px;
  @media (max-width: 1019px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 520px) {
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
export const MobileLinkText = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 800;
  @media screen and (max-width: 520px) {
    display: none;
  }
`
