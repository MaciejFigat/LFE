import styled from 'styled-components'

export const IconsWrapper = styled.ul`
  list-style: none;
  padding: 0;
`
export const IconsItem = styled.div`
  padding: 0;
  font-size: 1em;
  display: flex;
  ${({ lowerPosition }) => lowerPosition && 'position: relative;'}
  top: ${({ lowerPosition }) => (lowerPosition ? lowerPosition : null)};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* max-width: 50px; */
  max-width: 20px;
  margin-right: 0;
  @media (max-width: 500px) {
    max-width: 30px;
  }
  &:after {
    content: '${(props) => props.contentAfter}';
    position: relative !important;
    /* position: absolute !important; */
    background: ${(props) =>
      props.showContent ? `transparent` : 'var(--background-blur1)'};
    padding: 0.25rem;
    height: ${(props) => (props.noContent ? `0px` : 'fit-content')};
    min-height: ${(props) => (props.noContent ? `0px` : '15px')};
    border-radius: 5px;
    opacity: ${(props) => (props.contentAfter ? `1` : '0')};
    transition: all 0.2s ease-in;
    /* z-index: 11; */
    width: ${(props) => (props.noContent ? `0px` : `70px`)};
    width: ${(width) => width && width};

    /* max-width: ${(props) => (props.noContent ? `0px` : 'min-content')}; */

    padding-right: 0.25rem;
    font-size: min(max(1rem, 4vw), 12px);
    /* display: block !important; */

    text-transform: uppercase;
    left: 60px;
    top: ${({ toTop }) => (toTop ? toTop : null)};
    bottom: ${({ toRight }) => (toRight ? '15px;' : '15px;')};
    bottom: ${({ toBottom }) => toBottom && '-5px;'};

    left: ${({ toRight }) => toRight && toRight};

    left: ${({ toLeft }) => toLeft && toLeft};
    left: ${({ toBottom }) => toBottom && '0px;'};

    @media (max-width: 500px) {
      width: ${(props) => (props.noContent ? `0px` : '60px')};
    }
  }
`
