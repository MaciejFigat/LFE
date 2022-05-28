import React from 'react'

import { useAppSelector } from '../../../app/reduxHooks'
import DateCompare from '../DateCompare'
import DropdownFilter from './DropdownFilter/DropdownFilter'
import { FilterOptionsWrapper } from './FilterWrapper.styled'

interface FilterWrapperProps {}
const optionsTest = ['date', 'keyword', 'else']
const FilterWrapper: React.FC<FilterWrapperProps> = () => {
  const sortingOption: string = useAppSelector(
    (state) => state.preference.sortingOption
  )
  return (
    <FilterOptionsWrapper>
      <DropdownFilter options={optionsTest} />
      {sortingOption === 'date' && <DateCompare />}
      {sortingOption === 'keyword' && 'keyword sorting'}
      {sortingOption === 'else' && 'else sorting'}
    </FilterOptionsWrapper>
  )
}
export default FilterWrapper
