import React from 'react'
import {
  SectionContainer,
  SectionTitle,
  SectionDescription,
} from './sectionSmall.styled'
interface SmallSectionProps {
  title: string
  description?: string
  variant?: 'dark' | 'light' | 'primary' | 'secondary' | 'tertiary' | 'blue'
}

const SmallSection: React.FC<SmallSectionProps> = ({
  title,
  description,
  variant,
}) => {
  return (
    <SectionContainer variant={variant}>
      <SectionTitle variant={variant}>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
    </SectionContainer>
  )
}
export default SmallSection
