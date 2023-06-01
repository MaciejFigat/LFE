import React, { useState } from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import {
  HorizontalWrapper,
  RegularDiv,
  RelativeWrapper,
  RelativeWrapperStretch
} from '../../../styles/misc.styled'
import Pagination from '../../../components/Miscellaneous/Pagination/Pagination'
import SearchBar from '../../SearchBar/SearchBar'
import SvgIcon from '../../../components/SvgIcon/SvgIcon'
import HeroSearchOptions from './HeroSearchOptions'
import {
  SearchBarPaginationSvgWrapper,
  SearchBarPaginationSvgWrapperSecond
} from './HeroSection.styled'
import { ButtonVerySmall } from '../../../components/Buttons/Buttons.styled'
import { OptionsContainer } from '../../SearchBar/SearchBar.styled'

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
    <RelativeWrapperStretch>
      <OptionsContainer>
        {data && data?.length === 0 ? null : (
          <SearchBarPaginationSvgWrapper>
            <RelativeWrapper top='5px' left='-10px'>
              <ButtonVerySmall variant='secondaryEmpty' onClick={showHandler}>
                <RelativeWrapper top='4px' left='5px'>
                  <SvgIcon
                    variant={
                      showSearchBar && !showSearchOptions ? 'store' : 'search'
                    }
                  />{' '}
                </RelativeWrapper>
              </ButtonVerySmall>
            </RelativeWrapper>
          </SearchBarPaginationSvgWrapper>
        )}
        {data && data?.length === 0 ? null : (
          <SearchBarPaginationSvgWrapperSecond>
            <RelativeWrapper top='-10px' left='-10px'>
              <ButtonVerySmall
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
              </ButtonVerySmall>
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
      </OptionsContainer>
    </RelativeWrapperStretch>
  )
}
export default HomeSearchBarPagination
