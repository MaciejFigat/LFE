import React from 'react'
import {
  FooterContainer,
  FooterSection,
  FooterSectionHeading,
  FooterSectionText,
  FooterMedia,
  FooterMediaWrapper,
  FooterIcon,
  FooterRights,
  SocialIcons,
  SocialIconLink,
} from './Footer.styled'

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterSectionHeading>
          Dokładamy wszelkich starań, aby baza była jak najbardziej aktualna.{' '}
        </FooterSectionHeading>
        <FooterSectionText>Kontakt: adam@turbo-lex.pl</FooterSectionText>
      </FooterSection>

      <FooterMedia>
        <FooterMediaWrapper>
          <FooterRights>TurboLex &copy; 2022</FooterRights>
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
            <SocialIconLink
              href='https://www.poetryfoundation.org/play/75764'
              target='_blank'
              aria-label='Instagram'
            >
              <FooterIcon icon={faInstagram} />
            </SocialIconLink>
            <SocialIconLink
              href='https://www.poetryfoundation.org/play/75764'
              target='_blank'
              aria-label='Facebook'
            >
              <FooterIcon icon={faFacebook} />
            </SocialIconLink>
          </SocialIcons>
        </FooterMediaWrapper>
      </FooterMedia>
    </FooterContainer>
  )
}
export default Footer
