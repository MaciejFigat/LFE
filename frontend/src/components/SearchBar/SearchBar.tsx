import React, { useState } from 'react'
import { useAppDispatch } from '../../app/reduxHooks'
import { getSearchResults } from '../../features/searchResults/searchResultsSlice'
import SvgIcon from '../SvgIcon/SvgIcon'
import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarWrapper,
  SearchHideButton,
  SearchInput,
} from './SearchBar.styled'
interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const dispatch = useAppDispatch()
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [showSearch, setShowSearch] = useState<boolean>(false)

  const showSearchHandler = () => {
    setShowSearch(!showSearch)
  }

  const submitHandler = (e: any) => {
    e.preventDefault()

    if (searchQuery?.length > 0) {
      const queryTrimmed = encodeURIComponent(searchQuery.trim())
      dispatch(getSearchResults(queryTrimmed))
      console.log(encodeURIComponent(searchQuery.trim()))
    }
  }
  return (
    <SearchBarWrapper>
      <SearchHideButton onClick={showSearchHandler}>
        {showSearch ? (
          <SvgIcon variant='search' noMargin />
        ) : (
          <SvgIcon variant='searchPlus' noMargin />
        )}
      </SearchHideButton>
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
        onClick={submitHandler}
      >
        Search
      </SearchBarButton>
    </SearchBarWrapper>
  )
}
export default SearchBar
