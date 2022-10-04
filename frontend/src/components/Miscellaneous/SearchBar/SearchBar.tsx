import React, { Dispatch, SetStateAction, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { useNavigate } from 'react-router-dom'
import {
  getSearchResults,
  getResultsFiltered,
} from '../../../features/searchResults/searchResultsSlice'
import Moment from 'moment'
import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarForm,
  SearchBarWrapper,
  SearchInput,
  SpinnerWrapperSearch,
} from './SearchBar.styled'
import SvgIcon from '../SvgIcon/SvgIcon'
import { ThreeDots } from 'react-loader-spinner'

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

  const loadingResults: any = useAppSelector(
    (state) => state.searchResult.loading
  )
  let navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState<string>('')

  const submitHandler = (e: any) => {
    e.preventDefault()
    const queryTrimmed = encodeURIComponent(searchQuery.trim())
    const filteredSearch = {
      query: queryTrimmed,
      skip: skip,
      take: take,
      start_date: parseInt(Moment(startDate).format('YYYYMMDD'), 10),
      end_date: parseInt(Moment(endDate).format('YYYYMMDD'), 10),
    }
    if (searchQuery?.length > 0 && isOpen) {
      dispatch(getResultsFiltered(filteredSearch))
      navigate('/')
    }

    if (searchQuery?.length > 0 && !isOpen) {
      dispatch(getSearchResults(queryTrimmed))
      navigate('/')
    }
  }
  return (
    <SearchBarWrapper>
      <SearchBarForm onSubmit={submitHandler}>
        <SearchBarButton
          className={`${isOpen === true ? 'show' : 'hide'} `}
          type='submit'
        >
          {loadingResults === false ? (
            <SvgIcon
              variant={isOpen ? 'searchPlus' : 'search'}
              toBottom
              contentAfter={'wyszukaj'}
              // contentAfter={
              //   isOpen ? 'zaawansowane wyszukiwanie' : 'wyszukiwanie'
              // }
              // showContent={isOpen ? true : false}
            />
          ) : (
            <SpinnerWrapperSearch>
              <ThreeDots
                height='22'
                width='22'
                color='var(--background3-main)'
                ariaLabel='loading'
              />
            </SpinnerWrapperSearch>
          )}
        </SearchBarButton>
        <SearchBarContainer>
          <SearchInput
            type='search'
            name='search'
            placeholder='wpisz frazę'
            autoComplete='search'
            value={searchQuery}
            onChange={(e: any) => setSearchQuery(e.target.value)}
          />
        </SearchBarContainer>
      </SearchBarForm>
    </SearchBarWrapper>
  )
}
export default SearchBar
