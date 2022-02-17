import styled from 'styled-components'

export const EditFormContainer = styled.div`
  display: grid;
  place-items: center;
  min-width: fit-content;
  @media (max-width: 639px) {
    width: 90%;
  }
`
export const EditForm = styled.form`
  width: 100%;
  margin-top: 2rem;
  @media (min-width: 640px) and (max-width: 798px) {
    margin-top: 40px;
    min-width: fit-content;
  }
  @media (max-width: 639px) {
    margin-top: 20px;
    min-width: fit-content;
  }
`
export const ContactField = styled.div`
  font-family: 'Quicksand', sans-serif;
  display: flex;
  flex-direction: column;
  text-align: left;

  label {
    color: var(--secondary2);
    font-weight: 700;
    @media (max-width: 798px) {
      font-size: 15px;
    }
  }
  &:after {
    content: '';
    display: block;
    position: relative;
    bottom: 24px;
    left: 0;
    width: 100%;
    height: 2px;
    --angle: 0deg;
    border-bottom: 2px solid;
    border-image: linear-gradient(
        45deg,
        var(--secondary1),
        var(--secondary2),
        var(--secondary3)
      )
      1;
    animation: 8s rotate linear infinite;
  }
`

export const ContactFieldContent = styled.input`
  &::placeholder {
    color: var(--background2-main);
    font-weight: 400;
  }

  font-family: 'Quicksand', sans-serif;
  outline: none;
  border: none;
  color: var(--background1-main);
  background: none;
  line-height: 1.2;
  cursor: text;
  font-size: 18px;
  line-height: 1.2;
  padding: 0.8rem 1.2rem;
  margin-bottom: 20px;
  transition: 1.9s;
  font-weight: 600;

  @media (max-width: 798px) {
    font-size: 15px;
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
`
