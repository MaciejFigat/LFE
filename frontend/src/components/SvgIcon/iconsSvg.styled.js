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
  margin-right: ${({ noMargin }) => (noMargin ? '0rem; ' : '1rem;')};
  /* transition: all 0.3s ease-out; */
  &:after {
    color: var(--background-tertiary2);
    content: '${(props) => props.contentAfter}';
    opacity: ${(props) => (props.contentAfter ? `1` : '0')};
    transition: all 0.3s ease-in;
    z-index: 11;
    width: 100px;
    font-size: 11px;
    display: block !important;
    position: relative !important;

    bottom: ${({ toRight }) => (toRight ? '15px; ' : '0px;')};
    left: ${({ toRight }) => (toRight ? '70px; ' : '0;')};

    @media (max-width: 1020px) {
      /* color: lime !important; */

      bottom: ${({ toRight }) => (toRight ? '15px; ' : '0px;')};
      left: ${({ toRight }) => (toRight ? '-60px; ' : '0;')};

      /* //! testing doesn't work <1020 px, content is passed - tested
     */
    }

    height: 5px;
  }

  /* @media (max-width: 1020px) { */

  /* }  */
`
