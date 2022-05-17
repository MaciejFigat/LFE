import styled from 'styled-components'

export const MainWrapper = styled.div`
  /* color: var(--background-secondary2); */
  display: flex;
  flex-direction: row;
`
export const ColOne = styled.div`
  /* border: 1px solid var(--background-secondary2); */
  width: 300px;
`
//? for testing purposes
export const LayoutWrapper = styled.div`
  /* display: flex; */
  /* flex-direction: row; */
  background-image: linear-gradient(
    0deg,
    hsl(215, 14%, 16%) 0%,
    hsl(215, 19%, 29%) 100%
  );
  border-radius: 3px;
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.25);
  margin: 3rem auto;
  /* max-width: 370px; */
  max-width: 900px;
`
export const LayoutDroppableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const LayoutHeader = styled.div``
export const AppBar = styled.div`
  border-radius: 3px;
`
export const AppBarTitle = styled.div`
  color: var(--background-secondary2);
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem;
  text-align: center;
`
export const ListItem = styled.li``
export const FragmentList = styled.ul`
  list-style: none;
  margin: 0;
  min-height: 1.5rem;
  padding: 0;
  position: relative;
  &ListItem + &ListItem {
    margin-top: 0.5rem;
  }
`

export const FragmentCard = styled.div`
  background-color: hsl(215, 14%, 37.5%);
  border-radius: var(--border-radius-500);
  cursor: pointer;
  color: hsl(228, 19%, 98%);
  padding: 0.66rem 1rem;
  position: relative;
`
export const Holder = styled.div`
  padding: 1rem 1.5rem;
`
export const HolderTitle = styled.div`
  background-color: #1da5f9;
  background-image: linear-gradient(90deg, #028ce1 0%, #6acbe0 100%);
  border-radius: var(--border-radius-500);
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  .holderTint-1 {
    background-image: linear-gradient(90deg, #2fd4bd 0%, #66e887 100%);
  }
  .holderTint-2 {
    background-image: linear-gradient(90deg, #fe8080 33%, #fea380 100%);
  }
`
export const HolderContent = styled.div``
