import React, { useState } from 'react'
import { useAppDispatch } from '../../app/reduxHooks'
import { getSearchResults } from '../../features/searchResults/searchResultsSlice'

import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarForm,
  SearchBarWrapper,
  SearchInput,
} from './SearchBar.styled'

interface SearchBarProps {
  isOpen: boolean
}

const SearchBar: React.FC<SearchBarProps> = ({ isOpen }) => {
  const dispatch = useAppDispatch()

  const [searchQuery, setSearchQuery] = useState<string>('')

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
      <SearchBarForm onSubmit={submitHandler}>
        <SearchBarContainer>
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
          className={`${isOpen === true ? 'show' : 'hide'} `}
          type='submit'
        >
          Search
        </SearchBarButton>
      </SearchBarForm>
    </SearchBarWrapper>
  )
}
export default SearchBar
