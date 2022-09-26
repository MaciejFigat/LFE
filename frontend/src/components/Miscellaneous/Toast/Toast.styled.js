import styled from 'styled-components'
import { handleToastColor } from './utils'

export const ToastWrapper = styled.div``
export const ToastContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  align-items: flex-end;
  transition: 0.7s;
  top: 200px;
  right: 100px;
  @media (max-width: 1010px) {
    top: 60px;
    right: 10px;
  }
  ${(props) =>
    props.variant === 'none' && 'transform: translateX(300px); opacity: 0;'}
`

export const ToastBody = styled.div`
  position: relative;
  right: 0px;
  ${(props) => handleToastColor(props.variant).toastColor}
  ${(props) => handleToastColor(props.variant).toastBackground}
  border-radius: 5px;
  padding: 1rem 1rem;
  min-width: fit-content;
  z-index: 12;
  transition: ease-out 0.7s;
`
