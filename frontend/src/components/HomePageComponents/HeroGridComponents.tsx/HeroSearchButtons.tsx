import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import {
  addHeroDocIndex,
  getDocByIdAndQuery,
  subtractHeroDocIndex,
} from '../../../features/searchResults/searchResultsSlice'
import { HorizontalWrapperGap } from '../../../styles/misc.styled'
import { SendButtonVerySmall } from '../../Miscellaneous/Buttons/Buttons.styled'
import SvgIcon from '../../Miscellaneous/SvgIcon/SvgIcon'
interface HeroSearchButtonsProps {}

const HeroSearchButtons: React.FC<HeroSearchButtonsProps> = () => {
  const dispatch = useAppDispatch()
  const resultsDetailView: boolean = useAppSelector(
    (state) => state.preference.resultsDetailView
  )
  const heroDocIndex: number = useAppSelector(
    (state) => state.searchResult.heroDocIndex
  )
  const searchData: any = useAppSelector(
    (state) => state.searchResult.searchResults.data
  )
  const searchResult: any = useAppSelector((state) => state.searchResult)

  const { data, query } = searchResult.searchResults
  // ! _Debounce maybe
  const minusHandlerDocIndex = () => {
    if (resultsDetailView) {
      const searchquery = {
        query: query,
        docNumber: data[heroDocIndex - 1].doc_id,
      }

      dispatch(getDocByIdAndQuery(searchquery))
    }
    dispatch(subtractHeroDocIndex())
  }
  const plusHandlerDocIndex = () => {
    if (resultsDetailView) {
      const searchquery = {
        query: query,
        docNumber: data[heroDocIndex + 1].doc_id,
      }

      dispatch(getDocByIdAndQuery(searchquery))
    }
    if (searchData.length > heroDocIndex) dispatch(addHeroDocIndex())
  }
  return (
    <>
      {searchData && searchData?.length === 0 ? null : (
        <HorizontalWrapperGap>
          <SendButtonVerySmall
            variant='primaryEmpty'
            onClick={() => minusHandlerDocIndex()}
          >
            <SvgIcon
              variant='chevronLeft'
              contentAfter='poprzedni'
              toLeft='-60px'
              lowerPosition='3px'
              width='80px'
            />
          </SendButtonVerySmall>{' '}
          <SendButtonVerySmall
            variant='primaryEmpty'
            onClick={() => plusHandlerDocIndex()}
          >
            <SvgIcon
              variant='chevronRight'
              contentAfter='następny'
              toRight='60px'
              lowerPosition='3px'
              width='80px'
            />
          </SendButtonVerySmall>
        </HorizontalWrapperGap>
      )}
    </>
  )
}
export default HeroSearchButtons
