import React from 'react'
import SvgIcon from '../Miscellaneous/SvgIcon/SvgIcon'
import {
  HeroTextContainer,
  HeroSecNoSvg,
  HeroTitleLeft,
} from './HeroSection.styled'

import {
  InfoColumn,
  InfoColumnShort,
  InfoRow,
  Subtitle,
  TextWrapper,
  TextWrapperParSimple,
  TopLine,
} from './HomeSection.styled'

interface HeroThreeProps {}

const HeroThree: React.FC<HeroThreeProps> = () => {
  const variant = 'secondary'
  return (
    <HeroSecNoSvg>
      <HeroTextContainer>
        {/* <InfoRow imgStart border> */}
        <InfoRow border imgStart>
          <InfoColumnShort imgStart>
            <TextWrapper>
              {' '}
              <TextWrapperParSimple>
                1. Zaloguj się{' '}
                <SvgIcon
                  variant='login'
                  noMargin
                  // contentAfter='export'
                  noContent
                />
              </TextWrapperParSimple>
              <TextWrapperParSimple>
                2. Kliknij w menu <SvgIcon variant='store' noMargin noContent />
              </TextWrapperParSimple>{' '}
              <TextWrapperParSimple>
                3. Wybierz projekt i kliknij{' '}
                <SvgIcon variant='export' noMargin noContent />
              </TextWrapperParSimple>{' '}
              <TextWrapperParSimple>
                4. Otwórz zapisany plik tekstowy
              </TextWrapperParSimple>{' '}
            </TextWrapper>
          </InfoColumnShort>
          <InfoColumn>
            <TextWrapper>
              <HeroTitleLeft>Eksport projektów</HeroTitleLeft>
              <TopLine variant={variant}>Jak wyeksportować projekt?</TopLine>
              <p>
                {' '}
                Obecnie umożliwiamy zapisanie zebranych fragmentów i ich eksport
                do pliku doc.
              </p>
              <Subtitle variant={variant}></Subtitle>
              <p>
                {' '}
                Funkcjonalność jest dostępna dla zalogowanych użytkowników.
              </p>
              <Subtitle variant={variant}></Subtitle>
            </TextWrapper>
          </InfoColumn>
        </InfoRow>
      </HeroTextContainer>
    </HeroSecNoSvg>
  )
}
export default HeroThree
