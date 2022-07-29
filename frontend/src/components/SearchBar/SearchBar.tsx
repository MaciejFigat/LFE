import React, { Dispatch, SetStateAction, useState } from 'react'
import { useAppDispatch } from '../../app/reduxHooks'
import { useNavigate } from 'react-router-dom'
import {
  getSearchResults,
  getResultsFiltered,
} from '../../features/searchResults/searchResultsSlice'
import Moment from 'moment'
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
      // console.log(
      //   parseInt(Moment(startDate).format('YYYYMMDD'), 10),
      //   parseInt(Moment(endDate).format('YYYYMMDD'), 10),
      //   skip,
      //   take
      // )
    }

    if (searchQuery?.length > 0 && !isOpen) {
      dispatch(getSearchResults(queryTrimmed))
      navigate('/')
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
