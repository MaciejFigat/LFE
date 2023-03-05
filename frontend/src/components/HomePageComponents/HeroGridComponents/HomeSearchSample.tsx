import React from 'react'

import { useAppDispatch } from '../../../app/reduxHooks'
import { getSearchResults } from '../../../features/searchResults/searchResultsSlice'
import { HeroSearchSampleWrapper } from '../../Miscellaneous/SearchBar/SearchBar.styled'
import { ButtonSmall } from '../../Miscellaneous/Buttons/BigButton.styled'
import {
  HeroTitleMiscMedium,
  HorizontalWrapperGap
} from '../../../styles/misc.styled'
import { AppDispatch } from '../../../app/store'
interface HomeSearchSampleProps {}

const HomeSearchSample: React.FC<HomeSearchSampleProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()

  const submitHandler = (sampleQuery: string) => {
    // e.preventDefault()

    const queryTrimmed = encodeURIComponent(sampleQuery.trim())

    dispatch(getSearchResults(queryTrimmed))
  }
  const variant = 'secondary'
  return (
    <>
      {' '}
      <HeroSearchSampleWrapper>
        <HeroTitleMiscMedium>Przykładowe tematy</HeroTitleMiscMedium>
        <HorizontalWrapperGap>
          {' '}
          <ButtonSmall
            variant={variant}
            onClick={() => submitHandler('podatek vat')}
          >
            VAT
          </ButtonSmall>
          <ButtonSmall variant={variant} onClick={() => submitHandler('cfc')}>
            CFC
          </ButtonSmall>
          <ButtonSmall
            variant={variant}
            onClick={() =>
              submitHandler('o podatku dochodowym od osób fizycznych')
            }
          >
            PIT
          </ButtonSmall>
        </HorizontalWrapperGap>{' '}
      </HeroSearchSampleWrapper>
    </>
  )
}
export default HomeSearchSample
