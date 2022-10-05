import React from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import SelectMainKeyword from '../../Miscellaneous/KeywordSearchPanel/DropdownSelect/SelectMainKeyword'
import FragmentsPagination from '../../Miscellaneous/Pagination/FragmentsPagination'
import DateCompare from '../DateCompare'
import DropdownFilter from './DropdownFilter/DropdownFilter'
import { FilterOptionsWrapper } from './FilterWrapper.styled'

interface FilterWrapperProps {}
const optionsTest = ['data', 'projekt', 'wszystkie']
const FilterWrapper: React.FC<FilterWrapperProps> = () => {
  const sortingOption: string = useAppSelector(
    (state) => state.preference.sortingOption
  )
  return (
    <FilterOptionsWrapper>
      <DropdownFilter options={optionsTest} />
      {sortingOption === 'data' && <DateCompare />}
      {sortingOption === 'projekt' && <SelectMainKeyword />}
      {sortingOption === 'wszystkie' && <FragmentsPagination narrow />}
    </FilterOptionsWrapper>
  )
}
export default FilterWrapper
