import React from 'react'
import DragAndDropProject from '../modules/DragAndDropProject/DragAndDropProject'
import { HeroDesktop } from '../layout/layout.styled'

import StoredFragmentsMobile from '../modules/DragAndDropProject/StoredFragmentsMobile'

interface StoredFragmentsScreenProps {}

const StoredFragmentsScreen: React.FC<StoredFragmentsScreenProps> = () => {
  return (
    <>
      <HeroDesktop>
        {' '}
        <DragAndDropProject />
      </HeroDesktop>
      <StoredFragmentsMobile />
    </>
  )
}
export default StoredFragmentsScreen
