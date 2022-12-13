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
  /* width: 480px; */
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
  font-size: 0.85rem;
  margin: 0;
  margin-bottom: 0.5rem;
  max-width: 70%;
`
export const FragmentsPExcerpt = styled.p`
  color: var(--background4-main);
  font-size: 1rem;
  /* font-weight: 600; */
  margin: 0;
  margin-bottom: 0.5rem;
`
export const DateCompareWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
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
  width: 100%;
`
export const DateCompareRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`
