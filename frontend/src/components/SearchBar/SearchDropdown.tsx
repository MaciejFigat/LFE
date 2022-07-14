import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { ThreeDots } from 'react-loader-spinner'
import SvgIcon from '../SvgIcon/SvgIcon'
import { getSearchResults } from '../../features/searchResults/searchResultsSlice'
import DatePicker, { registerLocale } from 'react-datepicker'
import pl from 'date-fns/locale/pl'
import 'react-datepicker/dist/react-datepicker.css'
import { SpinnerWrapperSearch } from './SearchBar.styled'
import {
  DropDownContainer,
  DropDownHeader,
  DropdownIconWrapper,
  DropDownList,
  DropDownListContainer,
  ListItem,
  Main,
} from './SearchBar.styled'
import SearchBar from './SearchBar'
import SearchFilter from '../SearchFilter/SearchFilter'
import CustomInputDatePicker from './CustomInputDatePicker'

registerLocale('pl', pl) //* registers locale for me to use it with DatePicker

interface NavDropdownProps {
  options?: any
  scrollDirection?: 'up' | 'down' | 'top' | undefined | null
}

const SearchDropdown: React.FC<NavDropdownProps> = ({ scrollDirection }) => {
  const dispatch = useAppDispatch()

  const loadingResults: any = useAppSelector(
    (state) => state.searchResult.loading
  )
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [startYear, setStartYear] = useState<number>(2015)
  const [startMonth, setStartMonth] = useState<number>(1)
  const [startDay, setStartDay] = useState<number>(1)
  const [endYear, setEndYear] = useState<number>(2016)
  const [endMonth, setEndMonth] = useState<number>(1)
  const [endDay, setEndDay] = useState<number>(1)
  //todo
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [isOpen, setIsOpen] = useState(false)

  const toggling = () => {
    setIsOpen(!isOpen)
  }
  const submitHandler = (e: any) => {
    e.preventDefault()

    if (searchQuery?.length > 0) {
      const queryTrimmed = encodeURIComponent(searchQuery.trim())
      dispatch(getSearchResults(queryTrimmed))
    }
  }

  useEffect(() => {
    if (scrollDirection === 'down') {
      setIsOpen(false)
    }
  }, [scrollDirection])

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader>
          {' '}
          {loadingResults === false ? (
            <DropdownIconWrapper onClick={toggling}>
              <SvgIcon
                variant={isOpen ? 'search' : 'searchPlus'}
                toBottom
                contentAfter={isOpen ? 'close' : 'advanced'}
                showContent={isOpen ? true : false}
              />
            </DropdownIconWrapper>
          ) : (
            <SpinnerWrapperSearch>
              <ThreeDots
                height='22'
                width='22'
                color='var(--background-neon5)'
                ariaLabel='loading'
              />
            </SpinnerWrapperSearch>
          )}
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            isOpen={isOpen}
          />
        </DropDownHeader>

        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {/* <ListItem onClick={toggling}> */}
              <ListItem>
                <SearchFilter searchQuery={searchQuery} />
              </ListItem>
              <ListItem>
                From:{' '}
                <DatePicker
                  selected={startDate}
                  locale='pl'
                  dateFormat='dd/MM/yyyy'
                  onChange={(date: Date) => setStartDate(date)}
                  // dayClassName='dayFormat'
                  calendarClassName='calendarFormat'
                  className='dateFormat'
                />
              </ListItem>
              <ListItem>
                To:{' '}
                <DatePicker
                  selected={endDate}
                  locale='pl'
                  dateFormat='dd/MM/yyyy'
                  onChange={(date: Date) => setEndDate(date)}
                  customInput={<CustomInputDatePicker />}
                />
                <DatePicker
                  selected={endDate}
                  locale='pl'
                  dateFormat='dd/MM/yyyy'
                  onChange={(date: Date) => setEndDate(date)}
                  customInput={<CustomInputDatePicker />}
                />
              </ListItem>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  )
}
export default SearchDropdown
