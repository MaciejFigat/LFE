import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../../app/reduxHooks'
import { sortingOptionEdit } from '../../../../features/preferences/preferenceSlice'
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
  Main,
} from './DropdownFilter.styled'

interface DropdownFilterProps {
  options: string[]
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({ options }) => {
  const dispatch: any = useAppDispatch()
  const sortingOption: string = useAppSelector(
    (state) => state.preference.sortingOption
  )
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(
    sortingOption
  )

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (value: string | null) => () => {
    setSelectedOption(value)
    setIsOpen(false)
  }
  useEffect(() => {
    dispatch(sortingOptionEdit(selectedOption))
  }, [dispatch, selectedOption])

  return (
    <>
      <Main>
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>{selectedOption}</DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {options?.map((option) => (
                  <ListItem
                    onClick={onOptionClicked(option)}
                    key={Math.random()}
                  >
                    {option}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Main>{' '}
    </>
  )
}
export default DropdownFilter
