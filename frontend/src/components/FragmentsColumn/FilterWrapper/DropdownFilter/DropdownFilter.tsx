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
  wide?: boolean
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({ options, wide }) => {
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
          <DropDownHeader onClick={toggling} wide={wide}>
            {sortingOption === 'wszystkie'
              ? `Pokaż ${selectedOption}`
              : `Sortowanie: ${selectedOption}`}
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList wide={wide}>
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
