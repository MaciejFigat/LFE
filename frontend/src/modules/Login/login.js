import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: grid;
  place-items: center;
  border-top: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2);
  width: 420px;
  height: 590px;
  padding: var(--gap-huge);
  border-radius: 10px;
  background: var(--background-gradient1);
  @media screen and (max-width: 960px) {
    max-width: 100%;
    width: 100%;
    margin: 0;
    padding: 0.5rem;
  }
`
export const LoginContainer = styled.div`
  display: grid;
  place-items: center center;
  height: 89vh;
  background: var(--background1-main);
  color: var(--background4-main);
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

export const Input = styled.input`
  max-width: 100%;
  width: 100%;
  padding: var(--padding-medium-large);
  color: var(--background4-main);
  outline: 0;
  font-size: 14px;
  transition: all 0.3s ease-out;
  border: none;
  background: none;
  &:focus {
    color: var(--background4-main);
  }
  &::placeholder {
    color: var(--background3-main);
  }
`
export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 760px) {
    max-width: 90%;
  }
`

export const LoginTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: fit-content;
  width: 100%;
  gap: var(--gap-medium);
`
export const FormLabel = styled.label`
  margin-bottom: var(--gap-small);
  width: 100%;
  text-transform: uppercase;
  color: ${({ $hasError, $isApproved }) =>
    $hasError
      ? 'var(--danger2)'
      : $isApproved
      ? 'var(--success1)'
      : 'var(--background3-main)'};
  font-size: var(--font-size-verySmall);
  padding: 16px 16px 0;
`
export const LoginInputsWrapper = styled.div`
  display: grid;
  place-items: center;
  background: var(--background1-main);
  border: 1px solid var(--background-blur1);
  border-radius: 0 0 var(--border-radius1) var(--border-radius1);
  &:first-of-type {
    border-radius: var(--border-radius1) var(--border-radius1) 0 0;
    border-bottom: none;
  }
  &:nth-of-type(2) {
    border-radius: 0;
    border-bottom: none;
  }
  &:last-of-type {
    margin-bottom: var(--gap-medium);
    border-radius: 0 0 var(--border-radius1) var(--border-radius1);
    border-bottom: 1px solid var(--background-blur1);
  }
`
export const LoginTitleHeader = styled.h3`
  font-size: var(--font-size-bigger);
  font-weight: 400;
`
export const LoginTextLink = styled.div`
  text-align: center;
  padding: 12px 16px 0;
  font-size: var(--font-size-small);
`
