import React from 'react'
import ScrollSection from '../components/ScrollSection/ScrollSection'

import UserFragmentsColumn from '../components/FragmentsColumn/UserFragmentsColumn'
interface StoredFragmentsProps {}

const StoredFragments: React.FC<StoredFragmentsProps> = () => {
  return (
    <div>
      <ScrollSection
        widthBig='50%'
        widthSmall='30%'
        transparent
        wideSection={<UserFragmentsColumn />}
        // narrowSection={<FragmentsColumn />}
        narrowSection={<h2>Sorting features</h2>}
        // wideSection={<h2>Sorting features</h2>}
      />
    </div>
  )
}
export default StoredFragments
