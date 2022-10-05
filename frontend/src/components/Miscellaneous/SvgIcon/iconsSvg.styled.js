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
  ${({ lowerPosition }) => lowerPosition && 'top: 4px;'}
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 50px;
  margin-right: 0;
  &:after {
    content: '${(props) => props.contentAfter}';
    opacity: ${(props) => (props.contentAfter ? `1` : '0')};
    transition: all 0.2s ease-in;
    z-index: 11;
    width: ${(props) => (props.noContent ? `0px` : '100px')};
    min-width: min-content;
    padding-right: 0.25rem;
    font-size: min(max(1rem, 4vw), 12px);
    display: block !important;
    position: relative !important;
    text-transform: uppercase;
    left: 60px;
    bottom: ${({ toRight }) => (toRight ? '15px;' : '15px;')};
    bottom: ${({ toBottom }) => toBottom && '-5px;'};
    left: ${({ toRight }) => toRight && '70px;'};
    left: ${({ toLeft }) => toLeft && '-60px;'};
    left: ${({ toBottom }) => toBottom && '0px; '};

    @media (max-width: 1020px) {
      /* bottom: ${({ toRight }) => (toRight ? '15px; ' : '15px;')};
      bottom: ${({ toBottom }) => toBottom && '-5px;'};
      left: ${({ toRight }) => (toRight ? '70px; ' : '-40px;')};
      left: ${({ toLeft }) => (toLeft ? '-45px; ' : '-40px;')};
      left: ${({ toBottom }) => toBottom && '0px;'}; */
    }

    height: 5px;
  }
`
