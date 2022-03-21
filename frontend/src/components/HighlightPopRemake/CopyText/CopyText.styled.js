import styled from 'styled-components'

export const CopyHeading = styled.h1`
  margin-bottom: 0.25rem;
  font-size: 1rem;
  line-height: 1.1;
  transition: all 0.3s ease-in;
  max-width: 38.8px;
  &:hover {
    color: var(--background-tertiary4);
  }
  @media screen and (max-width: 760px) {
    font-size: 26px;
  }

  &:after {
    color: var(--background-tertiary2);
    content: '${(props) => props.contentAfter}';
    opacity: ${(props) => (props.contentAfter ? `1` : '0')};
    transition: all 0.3s ease-in;
    z-index: 11;
    font-size: 11px;
    display: block;
    position: relative;
    bottom: 0px;
    left: 0;
    width: 350%;
    height: 5px;
  }
`
