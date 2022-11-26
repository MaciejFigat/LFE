import React, { useState } from 'react'
import SearchBar from '../../Miscellaneous/SearchBar/SearchBar'

interface HomeSearchBarOnlyProps {}

const HomeSearchBarOnly: React.FC<HomeSearchBarOnlyProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  return (
    <>
      {' '}
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
    </>
  )
}
export default HomeSearchBarOnly
