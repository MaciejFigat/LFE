import styled from 'styled-components'

export const IconsItem = styled.div`
  padding: 0;
  font-size: 1em;
  display: flex;
  ${({ lowerPosition }) => lowerPosition && 'position: relative;'}
  top: ${({ lowerPosition }) => (lowerPosition ? lowerPosition : null)};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 20px;
  margin-right: 0;
  @media (max-width: 500px) {
    max-width: 30px;
  }
  &:hover {
    &:after {
      opacity: ${(props) => (props.contentAfter ? `1` : `0`)};
    }
  }
  &:after {
    content: '${(props) => props.contentAfter}';
    position: relative !important;
    line-height: 1.2;
    background: ${(props) =>
      props.showContent ? `transparent` : 'var(--background-blur1)'};
    padding: 0.25rem;
    border-radius: 5px;
    transition: all 0.2s ease-in;
    opacity: 0;
    width: ${(props) => props.noContent && `0px`};
    width: ${(width) => width && width};
    padding-right: 0.25rem;
    font-size: min(max(1rem, 4vw), 12px);
    font-size: 0.85rem;
    left: 60px;
    top: ${({ toTop }) => (toTop ? toTop : null)};
    bottom: 15px;

    left: ${({ toLeft }) => toLeft && toLeft};

    @media (max-width: 500px) {
      bottom: -15px;
    }
  }
`
