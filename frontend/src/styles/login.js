import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: grid;
  place-items: center;
  border-top: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2);
  width: 600px;
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
    max-width: 80vw;
  }
`
export const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  height: 89vh;
  background: var(--background1-main);
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
  label {
    color: var(--background3-main);
    &:hover {
      color: var(--background-secondary1);
    }
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }
  @media screen and (max-width: 760px) {
    max-width: 90%;
  }
`

export const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: var(--background1-main) !important;
  color: var(--background4-main);
  margin-bottom: 0.9rem;
  border-radius: 5px;
  outline: 0;
  font-size: 14px;
  border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background-blur1);
  box-shadow: none !important;
  transition: all 0.3s ease-out;
  &:focus,
  &:hover {
    /* transition: all 1.2s ease-out !important; */
    box-shadow: var(--boxShadowInset1) !important;
    border-bottom: 1px solid var(--background-blur1);
    border-left: 1px solid var(--background-blur1);
    border-top: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::placeholder {
    color: var(--background2-main);
  }
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
  margin-bottom: 2rem;
`
