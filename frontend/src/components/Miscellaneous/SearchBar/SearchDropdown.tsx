import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { ThreeDots } from 'react-loader-spinner'
import SvgIcon from '../SvgIcon/SvgIcon'
import { highlightQueryEdit } from '../../../features/preferences/preferenceSlice'
import DatePicker, { registerLocale } from 'react-datepicker'
import pl from 'date-fns/locale/pl'
import 'react-datepicker/dist/react-datepicker.css'
import {
  DropDownDateContainer,
  SetTakeButton,
  SpinnerWrapperSearch,
  SwitchDivContainer,
  SwitchDivContainerNarrow,
  SwitchSectionWrapper,
  SwitchText,
} from './SearchBar.styled'
import {
  SearchBarButton,
  SearchBarForm,
  SearchInput,
} from './SearchFilter.styled'
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
import { DatePickerButton } from './DatePicker.styled'
import SwitchButton from './SwitchButton'

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

  //todo
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [isOpen, setIsOpen] = useState(false)
  const [isOnOne, setIsOnOne] = useState(false)
  const [isOnTwo, setIsOnTwo] = useState(false)
  const [isOnThree, setIsOnThree] = useState(false)

  const [highlightQuery, setHighlightQuery] = useState<string>('')

  const skip: number = 1
  const [take, setTake] = useState<number>(30)

  const setTakeHandler = (n: number) => {
    setTake(n)
  }
  const toggling = () => {
    setIsOpen(!isOpen)
  }

  const highlightHandler = (e: any) => {
    e.preventDefault()
    dispatch(highlightQueryEdit(highlightQuery))
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
            startDate={startDate}
            endDate={endDate}
            skip={skip}
            take={take}
          />
        </DropDownHeader>

        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <ListItem>
                <b>Filtruj po datach</b>
              </ListItem>
              <ListItem>
                <DropDownDateContainer>
                  Od:{' '}
                  <DatePicker
                    selected={startDate}
                    locale='pl'
                    dateFormat='dd/MM/yyyy'
                    calendarClassName='calendarFormat'
                    onChange={(date: Date) => setStartDate(date)}
                    customInput={<DatePickerButton />}
                  />
                  Do:{' '}
                  <DatePicker
                    selected={endDate}
                    locale='pl'
                    dateFormat='dd/MM/yyyy'
                    calendarClassName='calendarFormat'
                    onChange={(date: Date) => setEndDate(date)}
                    customInput={<DatePickerButton />}
                  />
                </DropDownDateContainer>
              </ListItem>
              <SwitchSectionWrapper>
                <ListItem>
                  <SearchBarForm onSubmit={highlightHandler}>
                    <SearchInput
                      type='highlight'
                      name='highlight'
                      placeholder='highlight'
                      autoComplete='highlight'
                      value={highlightQuery}
                      onChange={(e: any) => setHighlightQuery(e.target.value)}
                    />{' '}
                    <SearchBarButton type='submit'>Highlight</SearchBarButton>
                  </SearchBarForm>
                </ListItem>
                <ListItem>
                  <SwitchDivContainerNarrow>
                    <b>Ilość wyników:</b>
                    <SetTakeButton
                      buttonActive={take === 10 ? true : false}
                      onClick={() => setTakeHandler(10)}
                    >
                      10
                    </SetTakeButton>
                    <SetTakeButton
                      buttonActive={take === 20 ? true : false}
                      onClick={() => setTakeHandler(20)}
                    >
                      20
                    </SetTakeButton>
                    <SetTakeButton
                      buttonActive={take === 30 ? true : false}
                      onClick={() => setTakeHandler(30)}
                    >
                      30
                    </SetTakeButton>
                    <SetTakeButton
                      buttonActive={take === 50 ? true : false}
                      onClick={() => setTakeHandler(50)}
                    >
                      50
                    </SetTakeButton>
                    <SetTakeButton
                      buttonActive={take === 100 ? true : false}
                      onClick={() => setTakeHandler(100)}
                    >
                      100
                    </SetTakeButton>

                    {/* <b> Wyniki od:</b>
                    <NumberInput
                      type='number'
                      name='skip'
                      placeholder='skip'
                      autoComplete='skip'
                      value={skip}
                      onChange={(e: any) => setSkip(e.target.value)}
                    />
                    <b> Do:</b>{' '}
                    <NumberInput
                      type='number'
                      name='take'
                      placeholder='take'
                      autoComplete='take'
                      value={take}
                      onChange={(e: any) => setTake(e.target.value)}
                    /> */}
                  </SwitchDivContainerNarrow>
                </ListItem>
              </SwitchSectionWrapper>
              <SwitchSectionWrapper>
                <ListItem>
                  <SwitchDivContainer>
                    <SwitchButton
                      isOn={isOnOne}
                      setIsOn={setIsOnOne}
                      sortingOption='one'
                    />
                    <SwitchText isOn={isOnOne}>
                      Krajowa Informacja Skarbowa
                    </SwitchText>
                  </SwitchDivContainer>
                </ListItem>
                <ListItem>
                  <SwitchDivContainer>
                    <SwitchButton
                      isOn={isOnTwo}
                      setIsOn={setIsOnTwo}
                      sortingOption='two'
                    />
                    <SwitchText isOn={isOnTwo}>Izba Skarbowa</SwitchText>
                  </SwitchDivContainer>
                </ListItem>
                <ListItem>
                  {' '}
                  <SwitchDivContainer>
                    <SwitchButton
                      isOn={isOnThree}
                      setIsOn={setIsOnThree}
                      sortingOption='three'
                    />
                    <SwitchText isOn={isOnThree}>Minister Finansów</SwitchText>
                  </SwitchDivContainer>
                </ListItem>
              </SwitchSectionWrapper>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  )
}
export default SearchDropdown
