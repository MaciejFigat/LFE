import React, { useState } from 'react'
import SvgIcon from '../SvgIcon/SvgIcon'
import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarWrapper,
  SearchHideButton,
  SearchInput,
} from './SearchBar.styled'

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false)

  const showSearchHandler = () => {
    setShowSearch(!showSearch)
  }
  return (
    <SearchBarWrapper>
      <SearchHideButton onClick={showSearchHandler}>
        {showSearch ? (
          <SvgIcon variant='search' noMargin />
        ) : (
          <SvgIcon variant='searchPlus' noMargin />
        )}
      </SearchHideButton>
      <SearchBarContainer
        className={`${showSearch === true ? 'show' : 'hide'} `}
      >
        <SearchInput
          type='search'
          name='search'
          placeholder='Search'
          autoComplete='search'
          // value={email}
          // onChange={(e: any) => setEmail(e.target.value)}
        />
      </SearchBarContainer>
      <SearchBarButton className={`${showSearch === true ? 'show' : 'hide'} `}>
        Search
      </SearchBarButton>
    </SearchBarWrapper>
  )
}
export default SearchBar
