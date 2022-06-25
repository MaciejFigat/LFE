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
    min-width: min-content;
    padding-right: 0.25rem;
    /* font-size: 14px; */
    /* font-size: 0.75rem; */
    font-size: min(max(1rem, 4vw), 12px);
    display: block !important;
    position: relative !important;
    text-transform: uppercase;
    bottom: ${({ toRight }) => (toRight ? '15px; ' : '15px;')};
    left: ${({ toRight }) => (toRight ? '80px; ' : '50px;')};
    left: ${({ toLeft }) => (toLeft ? '-60px; ' : '80px;')};

    @media (max-width: 1020px) {
      bottom: ${({ toRight }) => (toRight ? '15px; ' : '15px;')};
      left: ${({ toRight }) => (toRight ? '70px; ' : '-40px;')};
      left: ${({ toLeft }) => (toLeft ? '-45px; ' : '70px;')};
    }

    height: 5px;
  }

  /* @media (max-width: 1020px) { */

  /* }  */
`
