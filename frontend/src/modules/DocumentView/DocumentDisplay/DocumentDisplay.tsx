import React from 'react'

import { ArticleContainer } from './ResultDisplay.styled'

import ScrollToElementHelper from '../../../hooks/ScrollToElementHelper'

import ArticleOnly from './ArticleOnly'

interface DocumentDisplayProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'blue'
  imgStart?: boolean
}

const DocumentDisplay: React.FC<DocumentDisplayProps> = () => {
  return (
    <ArticleContainer>
      <ScrollToElementHelper />
      <ArticleOnly />
    </ArticleContainer>
  )
}
export default DocumentDisplay
