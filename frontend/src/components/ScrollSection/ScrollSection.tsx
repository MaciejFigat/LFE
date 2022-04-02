import React, { ReactNode } from 'react'
import {
  SectionColumn,
  ScrollSectionRow,
  ScrollSec,
  SectionColumnScroll,
} from './ScrollSection.styled'

interface ScrollSectionProps {
  wideSection?: ReactNode
  narrowSection?: ReactNode
  widthSmall?: string
  widthBig?: string
  transparent?: boolean
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  wideSection,
  narrowSection,
  widthSmall,
  widthBig,
}) => {
  return (
    <ScrollSec>
      <ScrollSectionRow imgStart>
        <SectionColumn width={widthSmall}>{narrowSection}</SectionColumn>
        <SectionColumnScroll width={widthBig}>
          {wideSection}
        </SectionColumnScroll>
      </ScrollSectionRow>
    </ScrollSec>
  )
}
export default ScrollSection
