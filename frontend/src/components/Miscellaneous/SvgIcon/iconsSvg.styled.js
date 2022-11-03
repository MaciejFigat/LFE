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
  top: ${({ lowerPosition }) => lowerPosition && lowerPosition};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 50px;
  margin-right: 0;
  @media (max-width: 500px) {
    max-width: 30px;
  }
  &:after {
    content: '${(props) => props.contentAfter}';
    background: var(--background-blur1);\
    padding: 0.25rem;
    height: ${(props) => (props.noContent ? `0px` : 'fit-content')};
    border-radius: 5px;
    opacity: ${(props) => (props.contentAfter ? `1` : '0')};
    transition: all 0.2s ease-in;
    /* z-index: 11; */
    width: ${(props) => (props.noContent ? `0px` : '90px')};
    /* min-width: min-content; */
    padding-right: 0.25rem;
    font-size: min(max(1rem, 4vw), 12px);
    /* display: block !important; */
    position: relative !important;
    text-transform: uppercase;
    left: 60px;
    bottom: ${({ toRight }) => (toRight ? '15px;' : '15px;')};
    bottom: ${({ toBottom }) => toBottom && '-5px;'};
    left: ${({ toRight }) => toRight && '70px;'};
    left: ${({ toLeft }) => toLeft && '-40px;'};
    left: ${({ toBottom }) => toBottom && '0px; '};

    @media (max-width: 620px) {
      width: ${(props) => (props.noContent ? `0px` : '60px')};
      left: ${({ toBottom }) => toBottom && '-5px; '};
      font-size: 0.55rem;
      padding: 0;
    }
    @media (max-width: 500px) {
      width: ${(props) => (props.noContent ? `0px` : '60px')};
    }
    @media (max-width: 1020px) {
      /* bottom: ${({ toRight }) => (toRight ? '15px; ' : '15px;')};
      bottom: ${({ toBottom }) => toBottom && '-5px;'};
      left: ${({ toRight }) => (toRight ? '70px; ' : '-40px;')};
      left: ${({ toLeft }) => (toLeft ? '-45px; ' : '-40px;')};
      left: ${({ toBottom }) => toBottom && '0px;'}; */
    }
    /* @media (max-width: 380px) {
      display: none;
    } */
    /* height: 5px; */
  }
`
