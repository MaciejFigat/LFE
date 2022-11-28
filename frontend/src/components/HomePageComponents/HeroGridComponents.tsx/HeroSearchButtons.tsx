import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import {
  addHeroDocIndex,
  subtractHeroDocIndex,
} from '../../../features/searchResults/searchResultsSlice'
import { ButtonSmall } from '../../Miscellaneous/Buttons/BigButton.styled'
interface HeroSearchButtonsProps {}

const HeroSearchButtons: React.FC<HeroSearchButtonsProps> = () => {
  const dispatch = useAppDispatch()

  const heroDocIndex: number = useAppSelector(
    (state) => state.searchResult.heroDocIndex
  )
  const searchData: any = useAppSelector(
    (state) => state.searchResult.searchResults.data
  )
  const minusHandlerDocIndex = () => {
    dispatch(subtractHeroDocIndex())
  }
  const plusHandlerDocIndex = () => {
    if (searchData.length > heroDocIndex) dispatch(addHeroDocIndex())
  }
  return (
    <div>
      <ButtonSmall variant='secondary' onClick={() => minusHandlerDocIndex()}>
        -1
      </ButtonSmall>{' '}
      <ButtonSmall variant='secondary' onClick={() => plusHandlerDocIndex()}>
        +1
      </ButtonSmall>
    </div>
  )
}
export default HeroSearchButtons
