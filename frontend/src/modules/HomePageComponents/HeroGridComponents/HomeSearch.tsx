import React, { useState } from 'react'
import SearchBar from '../../SearchBar/SearchBar'
import { useAppDispatch } from '../../../app/reduxHooks'
import { getSearchResults } from '../../../features/searchResults/searchResultsSlice'
import {
  HomeSearchContainer,
  HomeSearchTipsWrapper,
  HomeSearchWrapper
} from '../../SearchBar/SearchBar.styled'
import { ButtonSmall } from '../../../components/ButtonsSend/BigButton.styled'
import {
  HeroTitleMiscMedium,
  HorizontalWrapperGap
} from '../../../styles/misc.styled'
import { AppDispatch } from '../../../app/store'
interface HomeSearchProps {}

const HomeSearch: React.FC<HomeSearchProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()

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
