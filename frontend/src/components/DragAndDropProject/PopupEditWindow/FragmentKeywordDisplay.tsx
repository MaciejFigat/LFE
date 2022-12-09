import React from 'react'
import { useAppSelector } from '../../../app/reduxHooks'

import {
  KeywordB,
  KeywordDivSimple,
} from '../../Miscellaneous/KeywordSearchPanel/KeywordSearch/KeywordSearch.styled'

interface FragmentKeywordDisplayProps {
  id: string
}

const FragmentKeywordDisplay: React.FC<FragmentKeywordDisplayProps> = ({
  id,
}) => {
  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )

  const fragment = fragments.find(
    (fragmentSearched: any) => fragmentSearched._id === id
  )
  const keywords = fragment?.keywords

  return (
    <KeywordDivSimple>
      {keywords &&
        keywords.map((keyword: string) => (
          <KeywordB key={keyword}>
            {keywords.length > 1 ? `${keyword} \u00A0` : keyword}
          </KeywordB>
        ))}
    </KeywordDivSimple>
  )
}
export default FragmentKeywordDisplay
