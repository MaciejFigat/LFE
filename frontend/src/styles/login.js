import styled, { keyframes } from 'styled-components'

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-2px)
  }
`

export const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  background: var(--background2-main);
  color: var(--background4-main);
  @media screen and (max-width: 760px) {
    /* max-width: 90%; */
  }
`
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 1rem;
  @media screen and (max-width: 760px) {
    max-width: 90%;
  }
`

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  z-index: 1;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 760px) {
    max-width: 90%;
  }
`

export const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: var(--background4-main);
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`

export const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: var(--background4-main);
  font-weight: 600;
  text-transform: uppercase;
  background: var(--background1-main);
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  /* margin-top: 0.6rem; */
  margin-bottom: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    color: var(--background1-main);
    background: var(--background4-main);
    /* animation: ${jump} 0.2s ease-out forwards; */
  }
  :active {
    background: var(--background3-main);
  }
`

export const Title = styled.div`
  font-weight: normal;
  color: var(--background4-main);
  /* text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1); */
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;
`
export const LoginLink = styled.div`
  color: var(--background-secondary2);
  max-width: fit-content;
  transition: 0.3s;
  font-weight: 500;
  cursor: pointer;
  :hover {
    color: var(--background-secondary1);
  }
`

export const LoginTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: fit-content;
  width: 100%;
  margin-bottom: 2rem;
`
