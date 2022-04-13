import styled from 'styled-components'

export const HPopover = styled.div`
  padding: 6px 10px;
  background: var(--background1-main);
  border-radius: 3px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  transform: translate(-50%, -100%);
  transition: 0.2s all;
  display: flex;
  align-items: center;
  min-width: fit-content;

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
    border-top: 6px solid var(--background1-main);
  }
`

export const HPopoverItem = styled.span`
  color: var(--background5-main);
  cursor: pointer;
  padding: 0;
  display: flex;
  & + & {
    margin-left: 10px;
  }
`
