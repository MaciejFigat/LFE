import React from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import { CenterWrapper } from '../../HomePageComponents/HomeSection.styled'
import SelectMainKeyword from '../../Miscellaneous/KeywordSearchPanel/DropdownSelect/SelectMainKeyword'
import FragmentsPagination from '../../Miscellaneous/Pagination/FragmentsPagination'
import DateCompare from '../DateCompare'

interface HeroSortingOptionsProps {
  wide?: boolean
}

const HeroSortingOptions: React.FC<HeroSortingOptionsProps> = ({ wide }) => {
  const sortingOption: string = useAppSelector(
    (state) => state.preference.sortingOption
  )
  return (
    <CenterWrapper>
      {sortingOption === 'data' && <DateCompare />}
      {sortingOption === 'projekt' && <SelectMainKeyword wide={wide} />}
      {sortingOption === 'wszystkie' && <FragmentsPagination narrow />}
    </CenterWrapper>
  )
}
export default HeroSortingOptions
