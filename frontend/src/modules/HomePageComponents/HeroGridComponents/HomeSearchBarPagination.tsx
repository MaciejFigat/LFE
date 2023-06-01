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
import { ButtonSmallCircle } from '../../../components/Buttons/Buttons.styled'
import {
  OptionButtonsContainer,
  OptionsContainer
} from '../../SearchBar/SearchBar.styled'
import { ButtonVariants } from '../../../consts'

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
      <OptionButtonsContainer>
        {data && data?.length === 0 ? null : (
          <SearchBarPaginationSvgWrapper>
            <RelativeWrapper top='-2px' left='-10px'>
              <ButtonSmallCircle
                variant={ButtonVariants.PRIMARY_EMPTY}
                onClick={showHandler}
              >
                <RelativeWrapper top='7px' left='1px'>
                  <SvgIcon
                    variant={
                      showSearchBar && !showSearchOptions ? 'store' : 'search'
                    }
                    contentAfter={
                      showSearchBar && !showSearchOptions
                        ? 'wyniki'
                        : 'wyszukaj'
                    }
                    toLeft='-63px'
                    toTop='-20px'
                    width='70px'
                  />{' '}
                </RelativeWrapper>
              </ButtonSmallCircle>
            </RelativeWrapper>
          </SearchBarPaginationSvgWrapper>
        )}
        {data && data?.length === 0 ? null : (
          <SearchBarPaginationSvgWrapperSecond>
            <RelativeWrapper top='-45px' left='-10px'>
              <ButtonSmallCircle
                variant={ButtonVariants.PRIMARY_EMPTY}
                onClick={showOptionsHandler}
              >
                <HorizontalWrapper>
                  <RelativeWrapper top='6px' left='0px'>
                    <SvgIcon
                      variant={showSearchOptions ? 'chevronLeft' : 'eye'}
                      contentAfter={showSearchOptions ? 'wyszukaj' : 'opcje'}
                      toLeft='-63px'
                      toTop='-20px'
                      width='70px'
                    />{' '}
                  </RelativeWrapper>
                </HorizontalWrapper>
              </ButtonSmallCircle>
            </RelativeWrapper>
          </SearchBarPaginationSvgWrapperSecond>
        )}
      </OptionButtonsContainer>
      <OptionsContainer>
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
        )}{' '}
      </OptionsContainer>
    </RelativeWrapperStretch>
  )
}
export default HomeSearchBarPagination
