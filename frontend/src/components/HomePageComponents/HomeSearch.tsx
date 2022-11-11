import React, { useState } from 'react'
import SearchBar from '../Miscellaneous/SearchBar/SearchBar'
import { useAppDispatch } from '../../app/reduxHooks'
import { getSearchResults } from '../../features/searchResults/searchResultsSlice'
import {
  HomeSearchContainer,
  HomeSearchTipsWrapper,
  HomeSearchWrapper,
} from '../Miscellaneous/SearchBar/SearchBar.styled'
import { ButtonSmall } from '../Miscellaneous/Buttons/BigButton.styled'
import {
  HeroTitleMiscMedium,
  HorizontalWrapperGap,
} from '../../styles/misc.styled'
interface HomeSearchProps {}

const HomeSearch: React.FC<HomeSearchProps> = () => {
  const dispatch = useAppDispatch()

  const [searchQuery, setSearchQuery] = useState<string>('')

  const submitHandler = (sampleQuery: string) => {
    // e.preventDefault()

    const queryTrimmed = encodeURIComponent(sampleQuery.trim())

    dispatch(getSearchResults(queryTrimmed))
  }

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
        <HomeSearchTipsWrapper>
          <HorizontalWrapperGap>
            {' '}
            <ButtonSmall
              variant='primary'
              onClick={() => submitHandler('podatek vat')}
            >
              Podatek VAT
            </ButtonSmall>
            <ButtonSmall variant='primary' onClick={() => submitHandler('cfc')}>
              Spółki CFC
            </ButtonSmall>
            <ButtonSmall
              variant='primary'
              onClick={() =>
                submitHandler('o podatku dochodowym od osób fizycznych')
              }
            >
              Podatek PIT
            </ButtonSmall>
          </HorizontalWrapperGap>{' '}
          <HeroTitleMiscMedium>
            Wybierz przykładowy temat lub wpisz własny
          </HeroTitleMiscMedium>
        </HomeSearchTipsWrapper>
      </HomeSearchWrapper>
    </>
  )
}
export default HomeSearch
