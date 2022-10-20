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
import { ProgressBar, ThreeDots } from 'react-loader-spinner'
import { relative } from 'path'

interface SearchBarProps {
  isOpen: boolean
  searchQuery: string
  setSearchQuery?: Dispatch<SetStateAction<string>>
  startDate: any
  endDate: any
  skip: number
  take: number
  large?: boolean
}

const SearchBar: React.FC<SearchBarProps> = ({
  isOpen,
  startDate,
  endDate,
  skip,
  take,
  large,
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
    <SearchBarWrapper large={large}>
      <SearchBarForm onSubmit={submitHandler}>
        <SearchBarButton
          large={large}
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
              {large ? (
                <ProgressBar
                  height='140'
                  width='50'
                  ariaLabel='progress-bar-loading'
                  // wrapperStyle={{ position: 'relative;', left: '120px;' }}
                  wrapperClass='progress-bar-wrapper'
                  borderColor='var(--background4-main)'
                  barColor='var(--background-secondary1)'
                />
              ) : (
                <ThreeDots
                  height={large ? '44' : '22'}
                  width={large ? '44' : '22'}
                  color='var(--background4-main)'
                  ariaLabel='loading'
                />
              )}
            </SpinnerWrapperSearch>
          )}
        </SearchBarButton>
        <SearchBarContainer>
          <SearchInput
            large={large}
            type='search'
            name='search'
            placeholder={large ? '...' : 'wpisz frazę'}
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
