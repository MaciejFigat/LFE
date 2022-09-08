import React from 'react'
import {
  HeroSec,
  HeroTitle,
  HeroStory,
  HeroTextContainer,
  HeroSecNoSvg,
  HeroTwoContainer,
  // HeroP,
} from './HeroSection.styled'
import {
  // Container,
  HeroTextWrapper,
  // InfoColumn,
  // InfoColumnShort,
  // InfoRow,
  // InfoSec,
  Subtitle,
  // TextWrapper,
  TopLine,
} from './HomeSection.styled'

import { titleTwoSvg } from './HeroSectionSVGS/Title'
import HighlightPopMenuDemo from '../HighlightPopRemake/HighlightPopMenuDemo'

import { PopupDescriptionInput } from '../DragAndDropProject/PopupEditWindow/PopupEditWindow.styled'
import FragmentsColumn from '../FragmentsColumn/FragmentsColumn'

interface HeroTwoProps {}

const HeroTwo: React.FC<HeroTwoProps> = () => {
  const variant = 'secondary'
  return (
    <HeroTwoContainer>
      <div>
        <HeroTitle>{titleTwoSvg}</HeroTitle>
        <HighlightPopMenuDemo>
          <HeroTextWrapper>
            <TopLine variant={variant}>
              Zaznacz poniższy tekst lub jego część
            </TopLine>
            <p>
              Zaznaczając tekst wyszukanej interpretacji bądź wyroku, możesz
              wybrać opcję Kopiuj lub Zapisz. Kopiowany fragment zawiera
              odpowiednie metadane tzw. metrykę, czyli datę wydania, sygnaturę
              dokumentu, rodzaj organu wydającego itp.
            </p>
            <p>
              W przypadku kopiowania procedura jest podobna, lecz w tym
              przypadku zapisujemy fragment w naszym systemie. Jeśli użytkownik
              jest zalogowany, może przeglącać uprzednio zapisane fragmenty i je
              edytować np. dodając własne uwagi.
            </p>

            <Subtitle variant={variant}>
              <PopupDescriptionInput
                type='label'
                name='label'
                rows='4'
                placeholder='kopiuj i wklej tutaj'
              ></PopupDescriptionInput>
            </Subtitle>
          </HeroTextWrapper>
        </HighlightPopMenuDemo>
      </div>
      <FragmentsColumn />
    </HeroTwoContainer>
  )
}
export default HeroTwo
