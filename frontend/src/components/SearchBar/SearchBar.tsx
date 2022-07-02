import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { getSearchResults } from '../../features/searchResults/searchResultsSlice'
import SvgIcon from '../SvgIcon/SvgIcon'
import { ThreeDots } from 'react-loader-spinner'
import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarForm,
  SearchBarWrapper,
  SearchHideButton,
  SearchInput,
} from './SearchBar.styled'
interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const dispatch = useAppDispatch()
  const loadingResults: any = useAppSelector(
    (state) => state.searchResult.loading
  )
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [showSearch, setShowSearch] = useState<boolean>(true)

  const showSearchHandler = () => {
    setShowSearch(!showSearch)
  }

  const submitHandler = (e: any) => {
    e.preventDefault()

    if (searchQuery?.length > 0) {
      const queryTrimmed = encodeURIComponent(searchQuery.trim())
      dispatch(getSearchResults(queryTrimmed))
      // console.log(encodeURIComponent(searchQuery.trim()))
    }
  }
  return (
    <SearchBarWrapper>
      <SearchHideButton onClick={showSearchHandler}>
        {loadingResults === false ? (
          <SvgIcon
            noContent
            variant={showSearch ? 'search' : 'searchPlus'}
            noMargin
          />
        ) : (
          <>
            <ThreeDots
              height='22'
              width='22'
              color='var(--background-neon5)'
              ariaLabel='loading'
            />
          </>
        )}
      </SearchHideButton>
      <SearchBarForm onSubmit={submitHandler}>
        <SearchBarContainer
          className={`${showSearch === true ? 'show' : 'hide'} `}
        >
          <SearchInput
            type='search'
            name='search'
            placeholder='Search'
            autoComplete='search'
            value={searchQuery}
            onChange={(e: any) => setSearchQuery(e.target.value)}
          />
        </SearchBarContainer>
        <SearchBarButton
          className={`${showSearch === true ? 'show' : 'hide'} `}
          type='submit'
        >
          Search
        </SearchBarButton>
      </SearchBarForm>
    </SearchBarWrapper>
  )
}
export default SearchBar
