import React from 'react'
import {
  HeroSec,
  HeroTitle,
  HeroStory,
  HeroTextContainer,
  // HeroP,
} from './HeroSection.styled'
import {
  Container,
  InfoColumn,
  InfoColumnShort,
  InfoRow,
  InfoSec,
  Subtitle,
  TextWrapper,
  TopLine,
} from './HomeSection.styled'
import { stepsBackgroundTwo } from './HeroSectionSVGS/stepsBackground'

import { titleTwoSvg } from './HeroSectionSVGS/Title'
import HighlightPopMenuDemo from '../HighlightPopRemake/HighlightPopMenuDemo'

interface HeroTwoProps {}

const HeroTwo: React.FC<HeroTwoProps> = () => {
  const variant = 'primary'
  return (
    <HeroSec>
      <HeroTextContainer>
        <HeroTitle>{titleTwoSvg}</HeroTitle>
        {/* <HeroStory> */}
        <HighlightPopMenuDemo>
          {' '}
          <InfoSec variant={variant} paddingTop='large'>
            <Container>
              <InfoRow imgStart>
                <InfoColumnShort imgStart>
                  <TextWrapper>
                    {' '}
                    <TopLine variant={variant}></TopLine>
                    <Subtitle variant={variant}> </Subtitle>
                  </TextWrapper>
                </InfoColumnShort>
                <InfoColumn>
                  <TextWrapper>
                    <TopLine variant={variant}>
                      Zaznacz poniższy tekst lub jego część
                    </TopLine>
                    Zaznaczając tekst wyszukanej interpretacji bądź wyroku,
                    możesz wybrać opcję Kopiuj lub Zapisz. Kopiowany fragment
                    zawiera odpowiednie metadane tzw. metrykę, czyli datę
                    wydania, sygnaturę dokumentu, rodzaj organu wydającego itp.
                    W przypadku kopiowania procedura jest podobna, lecz w tym
                    przypadku zapisujemy fragment w naszym systemie. Jeśli
                    użytkownik jest zalogowany, może przeglącać uprzednio
                    zapisane fragmenty i je edytować np. dodając własne uwagi.
                    Następnie można owe fragmenty grupować w tzw. projekty i je
                    eksportować np. jako 2 grupy wspierające odmienne
                    argumentacje.
                    <Subtitle variant={variant}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Incidunt explicabo enim, optio facere magni quae
                      blanditiis sequi corporis reiciendis itaque.
                    </Subtitle>
                  </TextWrapper>
                </InfoColumn>
              </InfoRow>
            </Container>
          </InfoSec>
        </HighlightPopMenuDemo>
      </HeroTextContainer>

      {stepsBackgroundTwo}
    </HeroSec>
  )
}
export default HeroTwo
