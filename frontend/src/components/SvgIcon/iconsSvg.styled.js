import styled from 'styled-components'

export const IconsWrapper = styled.ul`
  list-style: none;
  padding: 0;
  /* display: flex; */
  //todo
  /* position: absolute; */
`
// export const IconsItem = styled.li`
export const IconsItem = styled.div`
  padding: 0;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 50px;
  /* margin-right: ${({ noMargin }) => (noMargin ? '0rem; ' : '0rem;')}; */
  margin-right: 0;
  /* transition: all 0.3s ease-out; */
  &:after {
    /* color: var(--background-tertiary2); */
    content: '${(props) => props.contentAfter}';
    opacity: ${(props) => (props.contentAfter ? `1` : '0')};
    transition: all 0.2s ease-in;
    /* transition: text 0.9s ease-in; */
    z-index: 11;
    width: ${(props) => (props.noContent ? `0px` : '100px')};
    /* font-size: 14px; */
    /* font-size: 0.75rem; */
    font-size: min(max(1rem, 4vw), 12px);
    display: block !important;
    position: relative !important;
    text-transform: uppercase;
    bottom: ${({ toRight }) => (toRight ? '15px; ' : '15px;')};
    left: ${({ toRight }) => (toRight ? '70px; ' : '50px;')};
    left: ${({ toLeft }) => (toLeft ? '-50px; ' : '50px;')};

    @media (max-width: 1020px) {
      bottom: ${({ toRight }) => (toRight ? '15px; ' : '15px;')};
      left: ${({ toRight }) => (toRight ? '70px; ' : '-40px;')};
      left: ${({ toLeft }) => (toLeft ? '-45px; ' : '-40px;')};
    }

    height: 5px;
  }

  /* @media (max-width: 1020px) { */

  /* }  */
`
