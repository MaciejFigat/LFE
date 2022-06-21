import React from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import SelectMainKeyword from '../../KeywordSearchPanel/DropdownSelect/SelectMainKeyword'
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
      {sortingOption === 'keyword' && <SelectMainKeyword />}
      {sortingOption === 'else' && 'else sorting'}
    </FilterOptionsWrapper>
  )
}
export default FilterWrapper
