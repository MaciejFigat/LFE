import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: grid;
  place-items: center;
  border-top: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2);
  width: 420px;
  height: 560px;
  padding: 2rem;
  border-radius: 20px;
  background: linear-gradient(
    120deg,
    var(--background-blur1) 0%,
    transparent 30%,
    transparent 70%,
    var(--background-blur1)
  );
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
  &:focus,
  &::placeholder {
    color: var(--background3-main);
  }
`
export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  z-index: 1;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  input:focus,
  input:hover ~ label {
    /* color: var(--background-secondary1); */
  }

  @media screen and (max-width: 760px) {
    max-width: 90%;
  }
`

export const InputAndLabelWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

export const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: var(--background4-main);
  font-weight: 500;
  font-size: 1rem;

  background: var(--background1-main);
  border: none;
  border-radius: 10px;
  outline: 0;
  cursor: pointer;

  margin-bottom: 0.6rem;
  box-shadow: var(--boxShadowClay1);
  transition: all 0.2s ease-out;
  :hover {
    color: var(--background-secondary1);

    box-shadow: var(--boxShadowInset1);
  }
  :active {
    box-shadow: var(--boxShadowInset4);
    background: var(--background1-main);
    /* box-shadow: none; */
  }
`

export const Title = styled.div`
  font-weight: normal;
  color: var(--background4-main);
  /* text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1); */
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 50%;
`
export const LoginLink = styled.div`
  color: var(--background-secondary2);
  min-width: fit-content;
  transition: 0.3s;
  /* font-weight: 500; */
  cursor: pointer;
  :hover {
    color: var(--background-secondary1);
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
