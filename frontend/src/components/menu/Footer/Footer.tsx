import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import {
  FooterContainer,
  //   FooterSection,
  //   FooterSectionHeading,
  FooterMedia,
  FooterMediaWrapper,
  FooterIcon,
  FooterRights,
  SocialIcons,
  SocialIconLink,
} from './Footer.styled'

import {
  // faFacebook,
  // faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons'
import {
  HorizontalWrapperTight,
  SwitchDivMisc,
  SwitchHandleMisc,
  SwitchTextMisc,
} from '../../../styles/misc.styled'
import { preferedSchemeEdit } from '../../../features/preferences/preferenceSlice'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const dispatch = useAppDispatch()

  const preferedScheme: string = useAppSelector(
    (state) => state.preference.preferedScheme
  )
  const [isDark, setIsDark] = useState(false)

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  }
  const toggleSwitch = () => {
    // setIsOn(!isOn)
    setIsDark((isDark) => !isDark)
    switch (preferedScheme) {
      case 'primary':
        dispatch(preferedSchemeEdit('secondary'))
        break
      case 'secondary':
        dispatch(preferedSchemeEdit('primary'))
        break

      default:
        return
    }
  }
  return (
    <FooterContainer>
      <FooterMedia>
        <FooterMediaWrapper>
          <FooterRights>TurboLex &copy; 2022</FooterRights>
          {/* <FooterSectionText>adam@turbo-lex.pl </FooterSectionText> */}

          <HorizontalWrapperTight>
            <SocialIcons>
              <SocialIconLink
                href='https://www.poetryfoundation.org/play/75764'
                target='_blank'
                aria-label='Twitter'
              >
                <FooterIcon icon={faTwitter} />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.poetryfoundation.org/play/75764'
                target='_blank'
                aria-label='LinkedIn'
              >
                <FooterIcon icon={faLinkedin} />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.poetryfoundation.org/play/75764'
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferrer'
              >
                <FooterIcon icon={faYoutube} />
              </SocialIconLink>
              {/* <SocialIconLink
              href='https://www.poetryfoundation.org/play/75764'
              target='_blank'
              aria-label='Instagram'
            >
              <FooterIcon icon={faInstagram} />
            </SocialIconLink> */}
              {/* <SocialIconLink
              href='https://www.poetryfoundation.org/play/75764'
              target='_blank'
              aria-label='Facebook'
            >
              <FooterIcon icon={faFacebook} />
            </SocialIconLink> */}
            </SocialIcons>
          </HorizontalWrapperTight>
          <HorizontalWrapperTight>
            {' '}
            <SwitchTextMisc isOn={isDark}>
              {preferedScheme === 'primary' ? (
                <FooterIcon icon={faSun} />
              ) : (
                <FooterIcon icon={faCloudMoon} />
              )}
            </SwitchTextMisc>
            <SwitchDivMisc
              className='switch'
              isOn={isDark}
              onClick={toggleSwitch}
            >
              <SwitchHandleMisc
                className='handle'
                isOn={isDark}
                layout
                transition={spring}
              />
            </SwitchDivMisc>
          </HorizontalWrapperTight>
        </FooterMediaWrapper>
      </FooterMedia>
    </FooterContainer>
  )
}
export default Footer
