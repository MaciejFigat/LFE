import React from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import { CenterWrapper } from '../../HomePageComponents/HomeSection.styled'
import SelectMainKeyword from '../../KeywordSearchPanel/DropdownSelect/SelectMainKeyword'
import FragmentsPagination from '../../../components/Miscellaneous/Pagination/FragmentsPagination'
import DateCompare from '../DateCompare'

interface HeroSortingOptionsProps {}

const HeroSortingOptions: React.FC<HeroSortingOptionsProps> = () => {
  const sortingOption: string = useAppSelector(
    state => state.preference.sortingOption
  )
  return (
    <CenterWrapper>
      {sortingOption === 'data' && <DateCompare />}
      {sortingOption === 'projekt' && <SelectMainKeyword />}
      {sortingOption === 'wszystkie' && <FragmentsPagination narrow />}
    </CenterWrapper>
  )
}
export default HeroSortingOptions
