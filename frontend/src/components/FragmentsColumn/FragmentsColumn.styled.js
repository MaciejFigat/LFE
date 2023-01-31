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

  max-width: 40vw;
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

  margin: 0;
  margin-bottom: 0.5rem;
`
export const DateCompareWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  flex-direction: column;
  align-items: center;
  text-align: center;
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
  gap: 1.25rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`
