import React from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import SelectMainKeyword from '../../KeywordSearchPanel/DropdownSelect/SelectMainKeyword'
import FragmentsPagination from '../../../components/Miscellaneous/Pagination/FragmentsPagination'
import DateCompare from '../DateCompare'
import DropdownFilter from './DropdownFilter/DropdownFilter'
import { FilterOptionsWrapper } from './FilterWrapper.styled'

interface FilterWrapperProps {
  wide?: boolean
}
const optionsTest = ['data', 'projekt', 'wszystkie']

const FilterWrapper: React.FC<FilterWrapperProps> = ({ wide }) => {
  const sortingOption: string = useAppSelector(
    state => state.preference.sortingOption
  )
  return (
    <FilterOptionsWrapper wide={wide}>
      <DropdownFilter options={optionsTest} wide={wide} />
      {sortingOption === 'data' && <DateCompare />}
      {sortingOption === 'projekt' && <SelectMainKeyword />}
      {sortingOption === 'wszystkie' && <FragmentsPagination narrow />}
    </FilterOptionsWrapper>
  )
}
export default FilterWrapper
