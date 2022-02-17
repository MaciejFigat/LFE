import styled from 'styled-components'

export const ResponsiveDiv = styled.div`
  display: grid;
  place-items: left;
  border-radius: 10px;
  width: 80vw;
  padding: 40px 50px 20px;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;

  background: var(--secondary5);

  @media (max-width: 1024px) {
    width: 85vw;
    padding: 20px 20px 20px;
  }
  @media (max-width: 768px) {
    width: 90vw;
    padding: 10px 10px 10px;
  }
`
export const FormContainerDiv = styled.div`
  display: grid;
  place-items: center;
`
export const ContactFormContainer = styled.div`
  display: grid;
  place-items: center;
`
export const ContactFormStyled = styled.form`
  width: 85%;
  margin-top: 2rem;
  @media (min-width: 640px) and (max-width: 798px) {
    margin-top: 40px;
    min-width: fit-content;
  }
  @media (max-width: 639px) {
    min-width: fit-content;
  }
`
export const ContactField = styled.div`
  font-family: 'Quicksand', sans-serif;
  display: flex;
  flex-direction: column;
  text-align: left;
  border-bottom: 1px solid var(--secondary1);
  label {
    font-size: 20px;
    color: var(--background1-main);
    font-weight: 700;
    @media (max-width: 798px) {
      font-size: 18px;
    }
  }
`

export const ContactFieldContent = styled.input`
  &::placeholder {
    color: var(--background2-main);
    font-weight: 500;
  }

  font-family: 'Quicksand', sans-serif;
  outline: none;
  border: none;
  color: var(--background1-main);
  background: none;
  line-height: 1.2;
  cursor: text;

  font-size: 20px;
  line-height: 1.2;
  padding: 0.8rem 1.2rem;

  margin-bottom: 20px;
  transition: 1.9s;
  font-weight: 600;

  @media (max-width: 798px) {
    font-size: 18px;
    font-weight: 500;
  }
`

export const MessageField = styled(ContactFieldContent)`
  min-height: 25vh;
  resize: none;
  overflow-y: auto;
`
export const SendButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 100%;
  margin-bottom: 1.5rem;
  @media (max-width: 798px) {
    flex-direction: column;
  }
`
