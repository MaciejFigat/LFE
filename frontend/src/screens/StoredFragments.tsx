import React from 'react'
import ScrollSection from '../components/ScrollSection/ScrollSection'

import FragmentsColumn from '../components/FragmentsColumn/FragmentsColumn'
interface StoredFragmentsProps {}

const StoredFragments: React.FC<StoredFragmentsProps> = () => {
  return (
    <div>
      <ScrollSection
        widthBig='70%'
        widthSmall='30%'
        transparent
        wideSection={<FragmentsColumn />}
        narrowSection={<h2>Sorting features</h2>}
      />
    </div>
  )
}
export default StoredFragments
