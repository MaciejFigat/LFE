import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../../app/reduxHooks'
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
  // keywordOptionOne?: boolean
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({ options }) => {
  // const dispatch: any = useAppDispatch()
  // const sortingKeywords = useAppSelector(
  //   (state) => state.preference.sortingKeywords
  // )
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(
    'select please'
  )

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (value: string | null) => () => {
    setSelectedOption(value)

    setIsOpen(false)
  }

  return (
    <>
      <Main>
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>
            {selectedOption || 'Select an option'}
          </DropDownHeader>
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
