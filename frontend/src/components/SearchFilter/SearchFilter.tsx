import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { getResultsFiltered } from '../../features/searchResults/searchResultsSlice'
import { ThreeDots } from 'react-loader-spinner'
import Highlighter from 'react-highlight-words'

import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarForm,
  SearchBarWrapper,
  SearchHideButton,
  SearchInput,
} from './SearchFilter.styled'
import { SendButtonSmall, SendButtonVerySmall } from '../Buttons/Buttons.styled'
import { highlightQueryEdit } from '../../features/preferences/preferenceSlice'

interface SearchFilterProps {}

const SearchFilter: React.FC<SearchFilterProps> = ({}) => {
  const dispatch = useAppDispatch()
  const loadingResults: any = useAppSelector(
    (state) => state.searchResult.loading
  )
  const [highlightQuery, setHighlightQuery] = useState<string>('cfc')
  const [searchQuery, setSearchQuery] = useState<string>('cfc')
  const [skip, setSkip] = useState<number>(1)
  const [take, setTake] = useState<number>(5)
  const [startDate, setStartDate] = useState<number>(20150113)
  const [endDate, setEndDate] = useState<number>(20160113)
  // const { query, skip, take, start_date, end_date } = searchquery

  const testHandler = (e: any) => {
    e.preventDefault()
    const searchquery = {
      query: searchQuery,
      skip: skip,
      take: take,
      start_date: startDate,
      end_date: endDate,
    }
    dispatch(getResultsFiltered(searchquery))
  }

  const highlightHandler = (e: any) => {
    e.preventDefault()
    dispatch(highlightQueryEdit(highlightQuery))
  }

  const submitHandler = (e: any) => {
    e.preventDefault()

    if (searchQuery?.length > 0) {
      const queryTrimmed = encodeURIComponent(searchQuery.trim())
      const searchquery = {
        query: queryTrimmed,
        skip: skip,
        take: take,
        start_date: startDate,
        end_date: endDate,
      }
      dispatch(getResultsFiltered(searchquery))
      // console.log(encodeURIComponent(searchQuery.trim()))
    }
  }
  return (
    <div>
      <h1>Testing /searchSkip</h1>
      <SendButtonVerySmall variant='emptyLight' onClick={testHandler}>
        test{' '}
      </SendButtonVerySmall>
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
        <SearchBarButton type='submit'>Search</SearchBarButton>
      </SearchBarForm>
      <SearchBarForm onSubmit={highlightHandler}>
        <SearchBarContainer>
          <SearchInput
            type='search'
            name='search'
            placeholder='Search'
            autoComplete='search'
            value={highlightQuery}
            onChange={(e: any) => setHighlightQuery(e.target.value)}
          />
        </SearchBarContainer>
        <SearchBarButton type='submit'>Highlight</SearchBarButton>
      </SearchBarForm>
    </div>
  )
}
export default SearchFilter
