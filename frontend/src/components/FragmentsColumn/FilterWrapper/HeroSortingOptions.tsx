import React from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import SelectMainKeyword from '../../Miscellaneous/KeywordSearchPanel/DropdownSelect/SelectMainKeyword'
import FragmentsPagination from '../../Miscellaneous/Pagination/FragmentsPagination'
import DateCompare from '../DateCompare'

import { FilterOptionsWrapper } from './FilterWrapper.styled'

interface HeroSortingOptionsProps {
  wide?: boolean
}

const HeroSortingOptions: React.FC<HeroSortingOptionsProps> = ({ wide }) => {
  const sortingOption: string = useAppSelector(
    (state) => state.preference.sortingOption
  )
  return (
    <FilterOptionsWrapper wide={wide}>
      {sortingOption === 'data' && <DateCompare />}
      {sortingOption === 'projekt' && <SelectMainKeyword wide={wide} />}
      {sortingOption === 'wszystkie' && <FragmentsPagination narrow />}
    </FilterOptionsWrapper>
  )
}
export default HeroSortingOptions
