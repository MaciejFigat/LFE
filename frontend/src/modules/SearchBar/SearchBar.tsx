import React, { Dispatch, SetStateAction, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { useNavigate } from 'react-router-dom'
import {
  getSearchResults,
  getResultsFiltered
} from '../../features/searchResults/searchResultsSlice'
import Moment from 'moment'
import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarForm,
  SearchBarWrapper,
  SearchInput,
  SpinnerWrapperSearch
} from './SearchBar.styled'
import SvgIcon from '../../components/SvgIcon/SvgIcon'
import { ThreeDots, RotatingLines } from 'react-loader-spinner'
import { RelativeWrapper } from '../../styles/misc.styled'
import { AppDispatch } from '../../app/store'

interface SearchBarProps {
  isOpen: boolean
  searchQuery: string
  setSearchQuery?: Dispatch<SetStateAction<string>>
  startDate: any
  endDate: any
  skip: number
  take: number
  large?: boolean
  medium?: boolean
}

const SearchBar: React.FC<SearchBarProps> = ({
  isOpen,
  startDate,
  endDate,
  skip,
  take,
  large,
  medium
}) => {
  const dispatch: AppDispatch = useAppDispatch()

  const loadingResults: any = useAppSelector(
    state => state.searchResult.loading
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
      end_date: parseInt(Moment(endDate).format('YYYYMMDD'), 10)
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
    <SearchBarWrapper large={large} medium={medium}>
      <SearchBarForm onSubmit={submitHandler}>
        <SearchBarButton
          large={large}
          medium={medium}
          className={`${isOpen === true ? 'show' : 'hide'} `}
          type='submit'
        >
          {loadingResults === false ? (
            <RelativeWrapper top='3px' left='-4px'>
              {' '}
              <SvgIcon variant={isOpen ? 'searchPlus' : 'search'} noContent />
            </RelativeWrapper>
          ) : (
            <SpinnerWrapperSearch>
              {large ? (
                <RotatingLines
                  strokeColor='var(--background-secondary1)'
                  strokeWidth='3'
                  animationDuration='0.75'
                  ariaLabel='progress-bar-loading'
                  width='28'
                  visible={true}
                />
              ) : (
                <ThreeDots
                  height={'22'}
                  width={'22'}
                  color='var(--background-secondary1)'
                  ariaLabel='loading'
                />
              )}
            </SpinnerWrapperSearch>
          )}
        </SearchBarButton>
        <SearchBarContainer>
          <SearchInput
            large={large}
            medium={medium}
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
