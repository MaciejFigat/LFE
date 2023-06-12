import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FragmentsWrapper = styled(motion.div)`
  display: grid;
  place-items: ${({ $moreColumns }) =>
    $moreColumns ? 'flex-start' : 'center'};
  margin-top: 2rem;
  margin-bottom: 2rem;

  grid-template-columns: ${({ $simpleVersion }) =>
    $simpleVersion ? 'repeat(1, 1fr)' : null};
  @media (min-width: 1640px) {
    grid-template-columns: ${({ $moreColumns, $width }) =>
      !$moreColumns && $width < 766 ? 'repeat(2, 1fr)' : null};

    grid-template-columns: ${({ $simpleVersion }) =>
      $simpleVersion ? 'repeat(1, 1fr)' : null};
  }
  @media (min-width: 1920px) {
    grid-template-columns: ${({ $moreColumns, $width }) =>
      !$moreColumns && $width < 966 ? 'repeat(2, 1fr)' : null};
    grid-template-columns: ${({ $moreColumns, $width }) =>
      !$moreColumns && $width < 500 && 'repeat(3, 1fr)'};
    grid-template-columns: ${({ $simpleVersion }) =>
      $simpleVersion ? 'repeat(1, 1fr)' : null};
  }
  @media (max-width: 1340px) {
    grid-template-columns: ${({ $moreColumns }) =>
      !$moreColumns && 'repeat(1, 1fr)'};
  }
  /* //todo resizable narrow column grid columns END */

  gap: 2.25rem 1.15rem;

  width: ${({ $moreColumns }) => ($moreColumns ? '100%' : 'fit-content')};

  ${({ $moreColumns }) => $moreColumns && 'display: grid;'};
  ${({ $moreColumns }) =>
    $moreColumns && 'grid-template-columns: repeat(3, 1fr);'};
  ${({ $moreColumns }) =>
    $moreColumns && 'grid-template-rows: fit-content(40%);'};

  ${({ $moreColumns }) => $moreColumns && 'grid-row-gap: 1.75em;'};
  ${({ $moreColumns }) => $moreColumns && 'grid-column-gap: 1rem;'};
  @media (max-width: 1420px) {
    ${({ $moreColumns }) =>
      $moreColumns && 'grid-template-columns: repeat(3, 1fr);'};
  }
  @media (max-width: 1220px) {
    ${({ $moreColumns }) =>
      $moreColumns && 'grid-template-columns: repeat(2, 1fr);'};
  }
  @media (max-width: 950px) {
    ${({ $moreColumns }) =>
      $moreColumns && 'grid-template-columns: repeat(1, 1fr);'};
  }
`
export const ListWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  margin: 0;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const WrapperMotionDiv = styled(motion.div)`
  position: relative;
`
export const ListWrapperDemo = styled(ListWrapper)`
  padding-right: 1rem;
  padding: 0;
  min-width: 90%;
  max-width: 90%;
`

export const ListItem = styled(motion.div)`
  display: grid;
  place-items: center;

  // ! border radius passed as proprerty of ListItem in order to animate propre

  background: var(--background1-main);
  @media (max-width: 740px) {
    padding: 12px;
  }
`
export const ListItemSimple = styled(ListItem)`
  display: grid;
  place-items: center;
`
export const ListTitleContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: min-content;
`
export const ListKeywordContainer = styled(ListTitleContainer)`
  margin-bottom: 0.75rem;
`
export const HorizontalButtonContainer = styled(ListTitleContainer)`
  align-items: flex-start;
  justify-content: flex-end;
  margin-bottom: 0;
`
export const TextAreaContainer = styled(motion.div)`
  display: flex;
  align-items: flex-start;
`
export const DatePar = styled(motion.p)`
  font-size: 0.75rem;
  margin: 0;
  padding: 0rem 0.75rem 0rem 0.5rem;
  color: var(--background4-main);
`
export const KeywordDiv = styled(motion.div)`
  min-width: fit-content;
  transition: 0.2s;
  &:hover {
    color: var(--background3-main);
  }
`
export const KeywordPar = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.9rem;
  color: var(--background4-main);
`
export const ListTitle = styled(motion.h2)`
  display: grid;
  place-items: center;
  margin: 0;
  word-break: break-all;
  margin-left: 0.5rem;
  font-size: 1.1rem;
  @media (max-width: 740px) {
    font-size: 1rem;
    margin-left: 0rem;
  }
`
export const ListButtonContainer = styled(motion.div)`
  display: flex;
  max-width: 200px;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-end;
`
export const ListButtonContainerLeft = styled(ListButtonContainer)`
  justify-content: flex-start;
`

export const TitleAnimated = styled(motion.div)`
  display: flex;
  min-height: max-content;
  flex-direction: row;
  align-items: center;
  word-break: break-all;
  justify-content: flex-start;
  width: 100%;
  min-width: 250px;
  @media (max-width: 1020px) {
    min-width: 100px;
  }
  transition: all 0.3s ease-out;
  &:hover {
    color: var(--background3-main);
  }
  &:active {
    color: var(--background4-main);
  }
`
export const TitleInput = styled(motion.input)`
  color: var(--background-secondary3);
  width: 100%;
  min-width: 250px;
  padding: 0;
  margin: 0;
  line-height: normal;
  background: transparent;
  outline: 0;
  background-color: transparent;
  border: none;
  &:focus {
    border: none;
    outline: 0;
  }
  font-size: inherit;
  font-family: inherit;
`
export const DescriptionAnimated = styled(motion.div)`
  min-width: 80%;
  min-height: 100px;
  color: var(--background4-main);
  transition: all 0.3s ease-out;
`

export const DescriptionInput = styled(motion.textarea)`
  outline: none;
  border: none;
  width: 100%;
  min-height: fit-content;
  height: 100%;
  color: var(--background3-main);
  transition: all 0.3s ease-out;
  background: none;
  cursor: text;
  line-height: 1.1;
  font-size: inherit;
  font-family: inherit;
  &::placeholder {
    color: var(--background4-main);
    font-weight: 400;
  }
  @media (max-width: 798px) {
    font-size: 15px;
    font-weight: 500;
  }
`
export const DescriptionDiv = styled(motion.div)`
  max-width: 80%;
  min-height: fit-content;
`

export const ListRow = styled(motion.div)`
  padding: 0.75rem;
  padding-top: 0.25rem;
  margin-top: 0.5rem;
  margin-right: 0.75rem;
  font-size: 0.9rem;
  font-weight: 400;
  border-radius: 10px;
  background: var(--background2-main);

  max-width: 100%;
  @media (max-width: 740px) {
    padding: 0.55rem;
    font-size: 0.65rem;
  }
`
export const ListRowShort = styled(ListRow)`
  align-items: flex-start;
  justify-items: flex-start;
`
export const ItemWrapper = styled(motion.div)`
  margin-bottom: 10px;
  width: 100%;

  &:last-child {
    margin-bottom: 0px;
  }
  @media (max-width: 740px) {
    margin-bottom: 5px;
  }
`
export const SimpleCitationItem = styled(motion.div)`
  display: grid;
  place-items: space-around;
  overflow-y: scroll;
  box-shadow: var(--boxShadow1);
  min-height: fit-content;
  height: 240px;
  min-width: 260px;
  max-width: 260px;
  padding: 0.75rem 1rem;
  margin: 0;

  border-radius: 20px;
  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  @media (min-width: 920px) {
    min-width: 270px;
    max-width: 270px;
  }
  @media (min-width: 1060px) {
    min-width: 310px;
    max-width: 310px;
  }
  @media (min-width: 1210px) {
    min-width: 360px;
    max-width: 360px;
  }
  @media (min-width: 1310px) {
    min-width: 400px;
    max-width: 400px;
  }
  @media (min-width: 1410px) {
    min-width: 420px;
    max-width: 420px;
  }
  @media (min-width: 1510px) {
    min-width: 460px;
    max-width: 460px;
  }

  ::-webkit-scrollbar {
    width: 0.1em;
  }

  ::-webkit-scrollbar-corner {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      transparent 10%,
      var(--background-blur2),
      var(--background-secondary1),
      var(--background-blur2) 90%,
      transparent
    );
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 2px;
  }
`
export const SimpleCitationItemSmall = styled(motion.div)`
  display: grid;
  place-items: flex-start;
  overflow-y: scroll;
  box-shadow: var(--boxShadow1);
  min-height: fit-content;
  height: 240px;
  padding: 1.55rem;
  padding: var(--padding-big);
  min-width: 360px;
  max-width: 360px;
  border-radius: 10px;
  border: 1px solid var(--background-blur1);
  ::-webkit-scrollbar {
    width: 0.1em;
  }

  ::-webkit-scrollbar-corner {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      transparent 10%,
      var(--background-blur2),
      var(--background-secondary1),
      var(--background-blur2) 90%,
      transparent
    );
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 2px;
  }
  @media (max-width: 620px) {
    max-width: 100%;
    min-width: 100%;
  }
`
export const SimpleCitationItemSuperSmall = styled(SimpleCitationItemSmall)`
  place-items: center;
  box-shadow: var(--boxShadow1);
  max-height: 150px;
  padding: 0.25rem 1rem;
  border-color: var(--background-blur1);
`
export const SimpleCitationItemNoShadow = styled(SimpleCitationItem)`
  box-shadow: none;
  height: 180px;
  padding: 1.25rem;
  min-width: 400px;
  overflow-y: hidden;
  min-height: fit-content;
  @media (max-width: 1020px) {
    min-width: 200px;
  }
`
