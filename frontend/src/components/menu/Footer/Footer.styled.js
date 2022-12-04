import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FooterContainer = styled.div`
  /* position: absolute;
  right: 0;
  bottom: 0;
  left: 0; */

  display: flex;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background: linear-gradient(
    180deg,
    transparent 0%,
    var(--background-blur1) 100%
  );
  border-top: 1px solid var(--background-blur1);
  padding: 0rem 0 1rem 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* margin-bottom: 24px; */
  max-width: 70%;
  color: var(--background5-main);
`
export const FooterSectionHeading = styled.p`
  color: var(--background4-main);
  /* margin-bottom: 24px; */
  font-size: 1rem;
  @media screen and (max-width: 770px) {
    font-size: 0.75rem;
    margin-left: 20px;
    margin-right: 20px;
  }
`
export const FooterSectionText = styled.div`
  color: var(--background4-main);
  font-size: 1rem;
  @media screen and (max-width: 770px) {
    margin-bottom: 0.75rem;
    font-size: 0.75rem;
  }
`

export const FooterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 770px) {
    flex-direction: column;
    width: 85%;
  }
`

export const FooterMedia = styled.div`
  max-width: 1000px;
  width: 100%;
`

export const FooterMediaWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 20px auto 0 auto;
  @media screen and (max-width: 770px) {
    flex-direction: column;
  }
`

export const NavIcon = styled(FontAwesomeIcon)`
  position: relative;
  top: ${({ top }) => (top ? top : '0')};
  left: ${({ left }) => (left ? left : '0')};
`
export const FooterIcon = styled(FontAwesomeIcon)`
  margin-right: 12px;
  /* margin-left: 54px; */
`
export const FooterRights = styled.div`
  display: flex;
  color: var(--background4-main);
  @media screen and (max-width: 770px) {
    margin-bottom: 18px;
    font-size: 0.75rem;
  }
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  /* justify-content: center; */
  align-items: center;
  width: 260px;
`
export const SocialIconLink = styled.a`
  color: var(--background4-main);
  font-size: 18px;
  &:hover {
    transition: all 0.3s ease-out;
    color: var(--background3-main);
  }
  @media screen and (max-width: 770px) {
    font-size: 0.95rem;
  }
`
