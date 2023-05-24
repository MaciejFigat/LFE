import React, { useState } from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import {
  HorizontalWrapper,
  RegularDiv,
  RelativeWrapper,
  RelativeWrapperStretch
} from '../../../styles/misc.styled'
import { SendButtonVerySmall } from '../../../components/ButtonsSend/Buttons.styled'
import Pagination from '../../../components/Miscellaneous/Pagination/Pagination'
import SearchBar from '../../SearchBar/SearchBar'
import SvgIcon from '../../../components/SvgIcon/SvgIcon'
import HeroSearchOptions from './HeroSearchOptions'
import {
  SearchBarPaginationSvgWrapper,
  SearchBarPaginationSvgWrapperSecond
} from './HeroSection.styled'

interface HomeSearchBarPaginationProps {}

const HomeSearchBarPagination: React.FC<HomeSearchBarPaginationProps> = () => {
  const searchResults: any = useAppSelector(
    state => state.searchResult.searchResults
  )
  const { data, query } = searchResults

  const [searchQuery, setSearchQuery] = useState<string>('')
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false)
  const [showSearchOptions, setShowSearchOptions] = useState<boolean>(false)

  const showHandler = () => {
    setShowSearchBar(showSearchBar => !showSearchBar)
    if (showSearchOptions)
      setShowSearchOptions(showSearchOptions => !showSearchOptions)
  }
  const showOptionsHandler = () => {
    setShowSearchOptions(showSearchOptions => !showSearchOptions)
  }

  return (
    <>
      <RelativeWrapperStretch>
        {data && data?.length === 0 ? null : (
          <SearchBarPaginationSvgWrapper>
            <RelativeWrapper top='5px' left='-10px'>
              <SendButtonVerySmall
                variant='secondaryEmpty'
                onClick={showHandler}
              >
                <HorizontalWrapper>
                  <RelativeWrapper top='4px' left='5px'>
                    <SvgIcon
                      variant={
                        showSearchBar && !showSearchOptions ? 'store' : 'search'
                      }
                    />{' '}
                  </RelativeWrapper>
                </HorizontalWrapper>
              </SendButtonVerySmall>
            </RelativeWrapper>
          </SearchBarPaginationSvgWrapper>
        )}
        {data && data?.length === 0 ? null : (
          <SearchBarPaginationSvgWrapperSecond>
            <RelativeWrapper top='-10px' left='-10px'>
              <SendButtonVerySmall
                variant='secondaryEmpty'
                onClick={showOptionsHandler}
              >
                <HorizontalWrapper>
                  <RelativeWrapper top='4px' left='5px'>
                    <SvgIcon
                      variant={showSearchOptions ? 'chevronLeft' : 'eye'}
                    />{' '}
                  </RelativeWrapper>
                </HorizontalWrapper>
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
