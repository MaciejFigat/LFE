import React, { useState } from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import {
  HorizontalWrapper,
  RegularDiv,
  RelativeWrapper,
  RelativeWrapperStretch,
} from '../../../styles/misc.styled'
import { SendButtonVerySmall } from '../../Miscellaneous/Buttons/Buttons.styled'
import Pagination from '../../Miscellaneous/Pagination/Pagination'
import SearchBar from '../../Miscellaneous/SearchBar/SearchBar'
import SvgIcon from '../../Miscellaneous/SvgIcon/SvgIcon'
import { SearchBarPaginationSvgWrapper } from './HeroSection.styled'

interface HomeSearchBarPaginationProps {}

const HomeSearchBarPagination: React.FC<HomeSearchBarPaginationProps> = () => {
  const searchResults: any = useAppSelector(
    (state) => state.searchResult.searchResults
  )
  const { data, query } = searchResults

  const [searchQuery, setSearchQuery] = useState<string>('')
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false)

  const showHandler = () => {
    setShowSearchBar((showSearchBar) => !showSearchBar)
  }

  return (
    <>
      <RelativeWrapperStretch>
        {data && data?.length === 0 ? null : (
          <SearchBarPaginationSvgWrapper>
            <SendButtonVerySmall variant='secondaryEmpty' onClick={showHandler}>
              <SvgIcon variant={showSearchBar ? 'chevronRight' : 'search'} />
            </SendButtonVerySmall>
          </SearchBarPaginationSvgWrapper>
        )}
        {data && (data?.length === 0 || showSearchBar) ? (
          <>
            <SearchBar
              large
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              isOpen={false}
              startDate={new Date()}
              endDate={new Date()}
              skip={1}
              take={30}
            />
          </>
        ) : (
          <>
            <RegularDiv>
              <b>{`${query}: ${data.length} wyników`}</b>
              <Pagination narrow />
            </RegularDiv>
          </>
        )}
      </RelativeWrapperStretch>
    </>
  )
}
export default HomeSearchBarPagination
