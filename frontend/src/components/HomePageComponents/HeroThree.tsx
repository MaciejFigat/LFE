import React from 'react'
import SvgIcon from '../Miscellaneous/SvgIcon/SvgIcon'
import {
  HeroTextContainer,
  HeroSecNoSvg,
  HeroTitleLeft,
} from './HeroSection.styled'
import { titleThreeSvg } from './HeroSectionSVGS/Title'

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
                1. Zaloguj się &nbsp;
                <SvgIcon
                  variant='login'
                  noMargin
                  // contentAfter='export'
                  noContent
                />
              </TextWrapperParSimple>
              <TextWrapperParSimple>
                2. Kliknij w menu Projekty&nbsp;
                <SvgIcon variant='moreOptions' noMargin noContent />
              </TextWrapperParSimple>{' '}
              <TextWrapperParSimple>
                3. Wybierz projekt i kliknij &nbsp;
                <SvgIcon variant='export' noMargin noContent />
              </TextWrapperParSimple>{' '}
              <TextWrapperParSimple>
                4. Otwórz zapisany plik tekstowy
              </TextWrapperParSimple>{' '}
            </TextWrapper>
          </InfoColumnShort>
          <InfoColumn>
            <TextWrapper>
              {/* <HeroTitleLeft>Eksport projektów</HeroTitleLeft> */}
              <HeroTitleLeft>{titleThreeSvg}</HeroTitleLeft>{' '}
              <TopLine variant={variant}>
                {' '}
                Obecnie umożliwiamy zapisanie zebranych fragmentów i ich eksport
                do pliku doc.
              </TopLine>
              <Subtitle variant={variant}></Subtitle>
              <TopLine variant={variant}>
                {' '}
                Funkcjonalność jest dostępna dla zalogowanych użytkowników.
              </TopLine>
              <Subtitle variant={variant}></Subtitle>
            </TextWrapper>
          </InfoColumn>
        </InfoRow>
      </HeroTextContainer>
    </HeroSecNoSvg>
  )
}
export default HeroThree
