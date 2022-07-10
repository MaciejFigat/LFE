import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { ThreeDots } from 'react-loader-spinner'
import SvgIcon from '../SvgIcon/SvgIcon'
import { UserInfo } from '../../interfaces'
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

interface NavDropdownProps {
  options?: any
  scrollDirection?: 'up' | 'down' | 'top' | undefined | null
}

const SearchDropdown: React.FC<NavDropdownProps> = ({ scrollDirection }) => {
  const loadingResults: any = useAppSelector(
    (state) => state.searchResult.loading
  )
  const [isOpen, setIsOpen] = useState(false)

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
          {loadingResults === false ? (
            <DropdownIconWrapper onClick={toggling}>
              <SvgIcon
                variant={isOpen ? 'search' : 'searchPlus'}
                toBottom
                contentAfter={isOpen ? 'close' : 'advanced'}
              />
            </DropdownIconWrapper>
          ) : (
            <>
              <ThreeDots
                height='22'
                width='22'
                color='var(--background-neon5)'
                ariaLabel='loading'
              />
            </>
          )}
          <SearchBar isOpen={isOpen} />
        </DropDownHeader>

        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <ListItem onClick={toggling}>
                <p>Lorem ipsum dolor sit.</p>
              </ListItem>
              <ListItem onClick={toggling}>
                <p>Lorem ipsum dolor sit.</p>
              </ListItem>
              <ListItem onClick={toggling}>
                <p>Lorem ipsum dolor sit.</p>
              </ListItem>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  )
}
export default SearchDropdown
