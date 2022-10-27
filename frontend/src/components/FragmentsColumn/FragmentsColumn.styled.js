import styled from 'styled-components'

export const FragmentsContainerSimple = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
`
export const FragmentContainer = styled.div`
  ${({ borderBottom }) =>
    borderBottom
      ? 'border-bottom: 1px solid var(--background2-main);'
      : 'border: none;'};
  /* background: lime; */
  width: 480px;
  max-width: 40vw;

  /* border-left: 1px solid var(--background2-main); */
  /* border-bottom: 1px solid var(--background2-main); */
  /* border: 1px solid var(--background2-main); */
  /* color: var(--background2-main); */
  /* padding: 1rem; */
  /* box-shadow: var(--boxShadow1); */
`
export const FragmentsP = styled.p`
  color: var(--background4-main);
  font-size: 0.75rem;
`
export const FragmentsPExcerpt = styled.p`
  font-size: 1rem;
`
export const DateCompareWrapper = styled.div`
  display: flex;
  /* flex-direction: row; */
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* text-justify: center; */
`
export const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const DateCompareRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`
