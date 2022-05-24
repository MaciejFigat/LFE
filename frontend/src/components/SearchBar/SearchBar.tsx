import React, { useState } from 'react'
import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarWrapper,
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
      <SearchBarButton onClick={showSearchHandler}>
        {showSearch ? '?' : '?'}
      </SearchBarButton>
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
      <SearchBarButton
        // className={(showSearch: boolean) => (showSearch ? 'show' : 'hide')}
        className={`${showSearch === true ? 'show' : 'hide'} `}
      >
        Search
      </SearchBarButton>
    </SearchBarWrapper>
  )
}
export default SearchBar
