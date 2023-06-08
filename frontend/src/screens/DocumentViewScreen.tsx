import React from 'react'
import DocumentView from '../modules/DocumentView/DocumentView'
import { HeroMobile } from '../layout/layout.styled'

import SimpleDocumentDisplay from '../modules/DocumentView/DocumentDisplay/SimpleDocumentDisplay'

interface DocumentViewScreenProps {}

const DocumentViewScreen: React.FC<DocumentViewScreenProps> = () => {
  return (
    <>
      {' '}
      <DocumentView />
      <HeroMobile>
        <SimpleDocumentDisplay />
      </HeroMobile>
    </>
  )
}
export default DocumentViewScreen
