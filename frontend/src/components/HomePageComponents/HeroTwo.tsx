import React from 'react'
import { HeroTitleLeft, HeroTwoContainer } from './HeroSection.styled'
import {
  HeroTextWrapper,
  HeroWrapperColumn,
  HeroWrapperRow,
  Subtitle,
  TopLine,
} from './HomeSection.styled'

import HighlightPopMenuDemo from '../Miscellaneous/HighlightPopRemake/HighlightPopMenuDemo'

import { PopupDescriptionInput } from '../DragAndDropProject/PopupEditWindow/PopupEditWindow.styled'
import FragmentsColumn from '../FragmentsColumn/FragmentsColumn'
import { AnimateSharedLayout } from 'framer-motion'
import { TwoColumnsWrapper } from '../../styles/misc.styled'
import { titleTwoSvg } from './HeroSectionSVGS/Title'
// import { titleTwoSvg } from './HeroSectionSVGS/Title'

interface HeroTwoProps {}

const HeroTwo: React.FC<HeroTwoProps> = () => {
  const variant = 'secondary'
  return (
    <AnimateSharedLayout>
      <HeroWrapperRow>
        <HeroTwoContainer>
          <HeroTextWrapper>
            <HeroTitleLeft>{titleTwoSvg}</HeroTitleLeft>
            {/* <HeroTitleLeft>Zaznacz poniższy tekst</HeroTitleLeft> */}

            <HighlightPopMenuDemo>
              <TwoColumnsWrapper>
                <TopLine variant={variant}>
                  Zaznaczając tekst wyszukanej interpretacji bądź wyroku, możesz
                  wybrać opcję Kopiuj lub Zapisz. Kopiowany fragment zawiera
                  odpowiednie metadane tzw. metrykę, czyli datę wydania,
                  sygnaturę dokumentu, rodzaj organu wydającego itp.
                </TopLine>
                <TopLine variant={variant}>
                  W przypadku kopiowania procedura jest podobna, lecz w tym
                  przypadku zapisujemy fragment w naszym systemie. Jeśli
                  użytkownik jest zalogowany, może przeglądać i edytować
                  uprzednio zapisane fragmenty, np. dodając własne uwagi.
                </TopLine>
              </TwoColumnsWrapper>
            </HighlightPopMenuDemo>

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
        <HeroWrapperColumn>
          <FragmentsColumn />
        </HeroWrapperColumn>
      </HeroWrapperRow>
    </AnimateSharedLayout>
  )
}
export default HeroTwo
