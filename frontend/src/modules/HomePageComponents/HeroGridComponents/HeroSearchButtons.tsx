import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { AppDispatch } from '../../../app/store'
import {
  addHeroDocIndex,
  addVisitedLink,
  changeDocId,
  getDocByIdAndQuery,
  subtractHeroDocIndex
} from '../../../features/searchResults/searchResultsSlice'
import {
  HorizontalWrapperGap,
  RelativeWrapper
} from '../../../styles/misc.styled'
import { SendButtonVerySmall } from '../../../components/ButtonsSend/Buttons.styled'
import SvgIcon from '../../../components/SvgIcon/SvgIcon'
interface HeroSearchButtonsProps {}

const HeroSearchButtons: React.FC<HeroSearchButtonsProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const resultsDetailView: boolean = useAppSelector(
    state => state.preference.resultsDetailView
  )
  const heroDocIndex: number = useAppSelector(
    state => state.searchResult.heroDocIndex
  )
  const searchData: any = useAppSelector(
    state => state.searchResult.searchResults.data
  )
  const searchResult: any = useAppSelector(state => state.searchResult)

  const visitedLinks: any[] = useAppSelector(
    state => state.searchResult.visitedLinks
  )
  const { data, query } = searchResult.searchResults
  // ! _Debounce maybe
  const minusHandlerDocIndex = () => {
    if (resultsDetailView) {
      const searchquery = {
        query: query,
        docNumber: data[heroDocIndex - 1].doc_id
      }

      const fragData = {
        doc_link: data[heroDocIndex - 1].doc_link,
        rodzaj_orzeczenia: data[heroDocIndex - 1].rodzaj_orzeczenia,
        data: data[heroDocIndex - 1].data,
        organ: data[heroDocIndex - 1].organ,
        id: data[heroDocIndex - 1].doc_id,
        query: query
      }

      const existingLink = visitedLinks.find(
        visitedLinks => visitedLinks.doc_link === fragData.doc_link
      )
      if (!existingLink) dispatch(addVisitedLink(fragData))

      dispatch(getDocByIdAndQuery(searchquery))
      dispatch(changeDocId(data[heroDocIndex + 1].doc_id))
    }
    dispatch(subtractHeroDocIndex())
  }
  const plusHandlerDocIndex = () => {
    if (resultsDetailView) {
      const searchquery = {
        query: query,
        docNumber: data[heroDocIndex + 1].doc_id
      }

      const fragData = {
        doc_link: data[heroDocIndex + 1].doc_link,
        rodzaj_orzeczenia: data[heroDocIndex + 1].rodzaj_orzeczenia,
        data: data[heroDocIndex + 1].data,
        organ: data[heroDocIndex + 1].organ,
        id: data[heroDocIndex + 1].doc_id,
        query: query
      }

      const existingLink = visitedLinks.find(
        visitedLinks => visitedLinks.doc_link === fragData.doc_link
      )
      if (!existingLink) dispatch(addVisitedLink(fragData))

      dispatch(changeDocId(data[heroDocIndex + 1].doc_id))
      dispatch(getDocByIdAndQuery(searchquery))
    }
    if (searchData.length > heroDocIndex) dispatch(addHeroDocIndex())
  }
  return (
    <>
      {searchData && searchData?.length === 0 ? null : (
        <HorizontalWrapperGap>
          <RelativeWrapper top='0' left='0px'>
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
          </RelativeWrapper>
          <RelativeWrapper top='0' left='0px'>
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
          </RelativeWrapper>
        </HorizontalWrapperGap>
      )}
    </>
  )
}
export default HeroSearchButtons
