import styled from 'styled-components'

export const CopyHeading = styled.h1`
  display: grid;
  place-items: center;
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.1;
  transition: all 0.3s ease-in;
  width: 80px;
  /* max-width: 38.8px; */
  /* max-width: 48px; */
  &:hover {
    color: var(--background3-main);
  }
  @media screen and (max-width: 760px) {
    font-size: 0.8rem;
    /* max-width: 31.14px; */
  }

  &:after {
    color: var(--background5-main);
    content: '${(props) => props.contentAfter}';
    opacity: ${(props) => (props.contentAfter ? `1` : '0')};
    transition: all 0.3s ease-in;
    z-index: 11;
    font-size: 11px;
    display: block;
    position: relative;
    bottom: 0px;
    left: 15px;
    width: 150%;
    height: 5px;
  }
`
export const SaveHeading = styled(CopyHeading)`
  /* max-width: 48.18px; */
  @media screen and (max-width: 760px) {
    font-size: 0.8rem;
    /* max-width: 38.8px; */
  }
`
