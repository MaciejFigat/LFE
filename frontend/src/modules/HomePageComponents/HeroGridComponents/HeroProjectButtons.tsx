import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { AppDispatch } from '../../../app/store'
import { sortingKeywordMainEdit } from '../../../features/preferences/preferenceSlice'
import {
  HorizontalWrapperGap,
  RelativeWrapper
} from '../../../styles/misc.styled'
import SvgIcon from '../../../components/SvgIcon/SvgIcon'
import { ButtonVerySmall } from '../../../components/Buttons/Buttons.styled'
interface HeroProjectButtonsProps {}

const HeroProjectButtons: React.FC<HeroProjectButtonsProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const fragments: any[] = useAppSelector(state => state.fragment.userFragments)
  const keywordMain = useAppSelector(
    state => state.preference.sortingKeywords.keywordMain
  )

  const keywordsAll = fragments
    ?.map(fragment =>
      fragment.keywords
        ?.filter((keyword: string) => keyword !== '')
        .map((keyword: string) => keyword)
    )
    .flat()
  //todo .flat() flattens the arr ie. [a, b, [c, d]].flat()=>[a, b, c, d]

  let uniqueKeywords = [...Array.from(new Set(keywordsAll))]

  // ! _Debounce maybe
  //* In this function, before the loop, I've added a variable called found and initialized it to false. I've set it to true if it finds a match. After the loop, we check if the variable is still false. If so, it means no match was found so we return the last element of the array.
  const minusHandlerDocIndex = () => {
    let found = false
    for (let i = 0; i < uniqueKeywords.length; i++) {
      if (uniqueKeywords[i] === keywordMain) {
        found = true
        if (i - 1 >= 0) {
          dispatch(sortingKeywordMainEdit(uniqueKeywords[i - 1]))
          return
        } else {
          dispatch(
            sortingKeywordMainEdit(uniqueKeywords[uniqueKeywords.length - 1])
          )
          return
        }
      }
    }
    if (!found) {
      dispatch(
        sortingKeywordMainEdit(uniqueKeywords[uniqueKeywords.length - 1])
      )
      return
    }
  }
  const plusHandlerDocIndex = () => {
    let found = false
    for (let i = 0; i < uniqueKeywords.length; i++) {
      if (uniqueKeywords[i] === keywordMain) {
        found = true
        if (i + 1 < uniqueKeywords.length) {
          dispatch(sortingKeywordMainEdit(uniqueKeywords[i + 1]))
          return
        } else {
          dispatch(sortingKeywordMainEdit(uniqueKeywords[0]))
          return
        }
      }
    }
    if (!found) {
      dispatch(sortingKeywordMainEdit(uniqueKeywords[0]))
      return
    }
  }
  return (
    <>
      {uniqueKeywords?.length === 0 ? null : (
        <HorizontalWrapperGap>
          <RelativeWrapper $top='5px' $left='0px'>
            <ButtonVerySmall
              variant='primaryEmpty'
              onClick={() => minusHandlerDocIndex()}
            >
              <SvgIcon variant='chevronLeft' />
            </ButtonVerySmall>{' '}
          </RelativeWrapper>
          <RelativeWrapper $top='5px' $left='0px'>
            <ButtonVerySmall
              variant='primaryEmpty'
              onClick={() => plusHandlerDocIndex()}
            >
              <SvgIcon variant='chevronRight' />
            </ButtonVerySmall>
          </RelativeWrapper>
        </HorizontalWrapperGap>
      )}
    </>
  )
}
export default HeroProjectButtons
