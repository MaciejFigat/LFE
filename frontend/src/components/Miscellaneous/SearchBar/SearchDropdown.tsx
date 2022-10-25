import React, { useState, useEffect } from 'react'
// import { useAppDispatch } from '../../../app/reduxHooks'
import SvgIcon from '../SvgIcon/SvgIcon'
// import { highlightQueryEdit } from '../../../features/preferences/preferenceSlice'
import DatePicker, { registerLocale } from 'react-datepicker'
import pl from 'date-fns/locale/pl'
import 'react-datepicker/dist/react-datepicker.css'
import {
  DropDownDateContainer,
  SetTakeButton,
  SwitchDivContainerNarrow,
  SwitchSectionWrapper,
} from './SearchBar.styled'

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
import { HorizontalWrapperBaseLine } from '../../../styles/misc.styled'

registerLocale('pl', pl) //* registers locale for me to use it with DatePicker

interface NavDropdownProps {
  options?: any
  scrollDirection?: 'up' | 'down' | 'top' | undefined | null
}

const SearchDropdown: React.FC<NavDropdownProps> = ({ scrollDirection }) => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  //todo
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [isOpen, setIsOpen] = useState(false)

  const skip: number = 1
  const [take, setTake] = useState<number>(30)

  const setTakeHandler = (n: number) => {
    setTake(n)
  }
  const toggling = () => {
    setIsOpen(!isOpen)
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
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            isOpen={isOpen}
            startDate={startDate}
            endDate={endDate}
            skip={skip}
            take={take}
          />
          <DropdownIconWrapper onClick={toggling}>
            <SvgIcon
              variant={isOpen ? 'minus' : 'moreOptions'}
              noContent
              // toBottom
              // contentAfter={isOpen ? 'close' : 'advanced'}
              // contentAfter={isOpen ? 'zamknij' : 'opcje'}
              // showContent={isOpen ? true : false}
            />
          </DropdownIconWrapper>
        </DropDownHeader>

        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <ListItem>
                <b>Filtruj po datach</b>
              </ListItem>
              <ListItem>
                <DropDownDateContainer>
                  <HorizontalWrapperBaseLine>
                    {' '}
                    Od:{' '}
                    <DatePicker
                      selected={startDate}
                      locale='pl'
                      dateFormat='dd/MM/yyyy'
                      calendarClassName='calendarFormat'
                      onChange={(date: Date) => setStartDate(date)}
                      customInput={<DatePickerButton />}
                    />
                  </HorizontalWrapperBaseLine>

                  <HorizontalWrapperBaseLine>
                    Do:{' '}
                    <DatePicker
                      selected={endDate}
                      locale='pl'
                      dateFormat='dd/MM/yyyy'
                      calendarClassName='calendarFormat'
                      onChange={(date: Date) => setEndDate(date)}
                      customInput={<DatePickerButton />}
                    />
                  </HorizontalWrapperBaseLine>
                </DropDownDateContainer>
              </ListItem>
              <SwitchSectionWrapper>
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
                  </SwitchDivContainerNarrow>
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
