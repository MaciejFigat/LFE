import styled from 'styled-components'

export const HPopover = styled.div`
  padding: 6px 10px;
  background: var(--background1-main);
  border-radius: 5px;
  /* border: dotted 1px var(--background5-main); */
  border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-left: 1px solid var(--background2-main);
  border-bottom: 1px solid var(--background2-main);
  box-shadow: var(--boxShadow1);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  transform: translate(-50%, -100%);
  transition: 0.2s all;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* min-width: fit-content; */
  min-width: 200px;
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -5px;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    /* border-top: 6px solid var(--background1-main); */
    border-top: 6px solid var(--background5-main);
  }
`

export const HPopoverItem = styled.span`
  display: flex;
  justify-content: center;
  color: var(--background5-main);
  min-width: 80px;
  cursor: pointer;
  padding: 0;
  display: flex;
  & + & {
    margin-left: 10px;
  }
`
