import React, { useState } from 'react'
import SearchBar from '../Miscellaneous/SearchBar/SearchBar'
import {
  HomeSearchContainer,
  HomeSearchWrapper,
} from '../Miscellaneous/SearchBar/SearchBar.styled'
interface HomeSearchProps {}

const HomeSearch: React.FC<HomeSearchProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  return (
    <>
      {' '}
      <HomeSearchWrapper>
        <HomeSearchContainer>
          <SearchBar
            large
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            isOpen={false}
            startDate={new Date()}
            endDate={new Date()}
            skip={1}
            take={30}
          />
        </HomeSearchContainer>
      </HomeSearchWrapper>
    </>
  )
}
export default HomeSearch
