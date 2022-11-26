import React, { useState } from 'react'

import { useAppDispatch } from '../../../app/reduxHooks'
import { getSearchResults } from '../../../features/searchResults/searchResultsSlice'
import { HeroSearchSampleWrapper } from '../../Miscellaneous/SearchBar/SearchBar.styled'
import { ButtonSmall } from '../../Miscellaneous/Buttons/BigButton.styled'
import {
  HeroTitleMiscMedium,
  HorizontalWrapperGap,
} from '../../../styles/misc.styled'
interface HomeSearchSampleProps {}

const HomeSearchSample: React.FC<HomeSearchSampleProps> = () => {
  const dispatch = useAppDispatch()

  const submitHandler = (sampleQuery: string) => {
    // e.preventDefault()

    const queryTrimmed = encodeURIComponent(sampleQuery.trim())

    dispatch(getSearchResults(queryTrimmed))
  }

  return (
    <>
      {' '}
      {/* <HomeSearchWrapper> */}
      <HeroSearchSampleWrapper>
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
        <HeroTitleMiscMedium>Przykładowe tematy</HeroTitleMiscMedium>
      </HeroSearchSampleWrapper>
      {/* </HomeSearchWrapper> */}
    </>
  )
}
export default HomeSearchSample
