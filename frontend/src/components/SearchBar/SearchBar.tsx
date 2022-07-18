import React, { Dispatch, SetStateAction, useState } from 'react'
import { useAppDispatch } from '../../app/reduxHooks'
import {
  getSearchResults,
  getResultsFiltered,
} from '../../features/searchResults/searchResultsSlice'

import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarForm,
  SearchBarWrapper,
  SearchInput,
} from './SearchBar.styled'

interface SearchBarProps {
  isOpen: boolean
  searchQuery: string
  setSearchQuery?: Dispatch<SetStateAction<string>>
  startDate: any
  endDate: any
  skip: number
  take: number
}

const SearchBar: React.FC<SearchBarProps> = ({
  isOpen,
  startDate,
  endDate,
  skip,
  take,
}) => {
  const dispatch = useAppDispatch()

  const [searchQuery, setSearchQuery] = useState<string>('')

  const submitHandler = (e: any) => {
    e.preventDefault()
    if (searchQuery?.length > 0 && isOpen) {
      console.log(startDate, endDate, skip, take)
    }

    if (searchQuery?.length > 0 && !isOpen) {
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
