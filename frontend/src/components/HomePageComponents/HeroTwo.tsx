import React from 'react'
import { HeroTitleLeft, HeroTwoContainer } from './HeroSection.styled'
import {
  HeroTextWrapper,
  HeroWrapperColumn,
  HeroWrapperRow,
  TopLine,
} from './HomeSection.styled'

import HighlightPopMenuDemo from '../Miscellaneous/HighlightPopRemake/HighlightPopMenuDemo'

import { PopupDescriptionInput } from '../DragAndDropProject/PopupEditWindow/PopupEditWindow.styled'
import FragmentsColumn from '../FragmentsColumn/FragmentsColumn'
import { AnimateSharedLayout } from 'framer-motion'
import { TwoColumnsWrapper } from '../../styles/misc.styled'

interface HeroTwoProps {}

const HeroTwo: React.FC<HeroTwoProps> = () => {
  const variant = 'secondary'
  return (
    <AnimateSharedLayout>
      <HeroWrapperRow>
        <HeroTwoContainer>
          <HeroTextWrapper>
            {/* <HeroTitleLeft>Zaznacz poniższy tekst</HeroTitleLeft> */}

            <HighlightPopMenuDemo>
              <HeroTitleLeft>Zapisywanie fragmentów</HeroTitleLeft>
              <TopLine variant={variant}>
                Zaznaczając tekst wyszukanej interpretacji bądź wyroku, możesz
                wybrać opcję Kopiuj lub Zapisz.
              </TopLine>
              <TopLine variant={variant}>
                Kopiowany fragment zawiera odpowiednie metadane np, datę
                wydania, sygnaturę dokumentu, rodzaj organu wydającego itp.
              </TopLine>
              <TwoColumnsWrapper>
                {/* <TopLine variant={variant}>
                  W przypadku kopiowania procedura jest podobna, lecz w tym
                  przypadku zapisujemy fragment w naszym systemie. Jeśli
                  użytkownik jest zalogowany, może przeglądać i edytować
                  uprzednio zapisane fragmenty, np. dodając własne uwagi.
                </TopLine> */}
              </TwoColumnsWrapper>
            </HighlightPopMenuDemo>

            {/* <Subtitle variant={variant}> */}
            <PopupDescriptionInput
              type='label'
              name='label'
              rows='4'
              placeholder='kopiuj i wklej tutaj'
            ></PopupDescriptionInput>
            {/* </Subtitle> */}
          </HeroTextWrapper>
        </HeroTwoContainer>
        <HeroWrapperColumn>
          <FragmentsColumn />
        </HeroWrapperColumn>
      </HeroWrapperRow>
    </AnimateSharedLayout>
  )
}
export default HeroTwo
