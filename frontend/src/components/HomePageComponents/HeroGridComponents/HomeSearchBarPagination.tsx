import React, { useState } from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import {
  RegularDiv,
  RelativeWrapper,
  RelativeWrapperStretch,
} from '../../../styles/misc.styled'
import { SendButtonVerySmall } from '../../Miscellaneous/Buttons/Buttons.styled'
import Pagination from '../../Miscellaneous/Pagination/Pagination'
import SearchBar from '../../Miscellaneous/SearchBar/SearchBar'
import SvgIcon from '../../Miscellaneous/SvgIcon/SvgIcon'
import HeroSearchOptions from './HeroSearchOptions'
import {
  SearchBarPaginationSvgWrapper,
  SearchBarPaginationSvgWrapperSecond,
} from './HeroSection.styled'

interface HomeSearchBarPaginationProps {}

const HomeSearchBarPagination: React.FC<HomeSearchBarPaginationProps> = () => {
  const searchResults: any = useAppSelector(
    (state) => state.searchResult.searchResults
  )
  const { data, query } = searchResults

  const [searchQuery, setSearchQuery] = useState<string>('')
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false)
  const [showSearchOptions, setShowSearchOptions] = useState<boolean>(false)

  const showHandler = () => {
    setShowSearchBar((showSearchBar) => !showSearchBar)
    if (showSearchOptions)
      setShowSearchOptions((showSearchOptions) => !showSearchOptions)
  }
  const showOptionsHandler = () => {
    setShowSearchOptions((showSearchOptions) => !showSearchOptions)
  }

  return (
    <>
      <RelativeWrapperStretch>
        {data && data?.length === 0 ? null : (
          <SearchBarPaginationSvgWrapper>
            <RelativeWrapper top='0px' left='0px'>
              <SendButtonVerySmall
                variant='secondaryEmpty'
                onClick={showHandler}
              >
                <SvgIcon variant={showSearchBar ? 'chevronRight' : 'search'} />
              </SendButtonVerySmall>
            </RelativeWrapper>
          </SearchBarPaginationSvgWrapper>
        )}
        {data && data?.length === 0 ? null : (
          <SearchBarPaginationSvgWrapperSecond>
            <RelativeWrapper top='0px' left='0px'>
              <SendButtonVerySmall
                variant='secondaryEmpty'
                onClick={showOptionsHandler}
              >
                <SvgIcon variant={showSearchOptions ? 'homeTwo' : 'homeTwo'} />
              </SendButtonVerySmall>
            </RelativeWrapper>
          </SearchBarPaginationSvgWrapperSecond>
        )}
        {data && data?.length > 0 && showSearchOptions ? (
          <HeroSearchOptions />
        ) : null}
        {data && !showSearchOptions && (data?.length === 0 || showSearchBar) ? (
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
            {!showSearchOptions ? (
              <>
                <RegularDiv>
                  <b>{`${query}: ${data?.length} wyników`}</b>
                  <Pagination narrow />
                </RegularDiv>
              </>
            ) : null}
          </>
        )}
      </RelativeWrapperStretch>
    </>
  )
}
export default HomeSearchBarPagination
