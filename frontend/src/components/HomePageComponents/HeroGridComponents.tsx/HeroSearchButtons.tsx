import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import {
  addHeroDocIndex,
  subtractHeroDocIndex,
} from '../../../features/searchResults/searchResultsSlice'
import { HorizontalWrapperGap } from '../../../styles/misc.styled'
import { SendButtonVerySmall } from '../../Miscellaneous/Buttons/Buttons.styled'
import SvgIcon from '../../Miscellaneous/SvgIcon/SvgIcon'
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
    <HorizontalWrapperGap>
      <SendButtonVerySmall
        variant='primaryEmpty'
        onClick={() => minusHandlerDocIndex()}
      >
        <SvgIcon variant='chevronLeft' noContent lowerPosition='3px' />
      </SendButtonVerySmall>{' '}
      <SendButtonVerySmall
        variant='primaryEmpty'
        onClick={() => plusHandlerDocIndex()}
      >
        <SvgIcon variant='chevronRight' noContent lowerPosition='3px' />
      </SendButtonVerySmall>
    </HorizontalWrapperGap>
  )
}
export default HeroSearchButtons
