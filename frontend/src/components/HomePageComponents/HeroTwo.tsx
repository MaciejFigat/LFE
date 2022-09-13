import React from 'react'
import { HeroTwoContainer } from './HeroSection.styled'
import {
  HeroTextWrapper,
  HeroWrapperColumn,
  HeroWrapperRow,
  Subtitle,
  TopLine,
} from './HomeSection.styled'

import HighlightPopMenuDemo from '../HighlightPopRemake/HighlightPopMenuDemo'

import { PopupDescriptionInput } from '../DragAndDropProject/PopupEditWindow/PopupEditWindow.styled'
import FragmentsColumn from '../FragmentsColumn/FragmentsColumn'
import { AnimateSharedLayout } from 'framer-motion'

interface HeroTwoProps {}

const HeroTwo: React.FC<HeroTwoProps> = () => {
  const variant = 'secondary'
  return (
    <AnimateSharedLayout>
      {' '}
      <HeroWrapperRow>
        <HighlightPopMenuDemo>
          <HeroTwoContainer>
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
                przypadku zapisujemy fragment w naszym systemie. Jeśli
                użytkownik jest zalogowany, może przeglądać i edytować uprzednio
                zapisane fragmenty, np. dodając własne uwagi.
              </p>
              <p>
                By przetestować zapisywanie fragmentów, na prawdziwym
                dokumencie. Wpisz frazę wyszukiwania w pasku menu, kliknij
                przycisk Znajdź i kliknij na jeden z zaproponowanych wyników.
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
          </HeroTwoContainer>
        </HighlightPopMenuDemo>
        <HeroWrapperColumn>
          <FragmentsColumn />
        </HeroWrapperColumn>
      </HeroWrapperRow>
    </AnimateSharedLayout>
  )
}
export default HeroTwo
