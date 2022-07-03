import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { searchResultsPageSaved } from '../../features/preferences/preferenceSlice'
import { SendButtonVerySmall } from '../Buttons/Buttons.styled'
import { PaginateActive, PaginateWrapper } from './Paginate.styled'

interface PaginationProps {}

const Pagination: React.FC<PaginationProps> = () => {
  const dispatch = useAppDispatch()
  const searchResults: any = useAppSelector(
    (state) => state.searchResult.searchResults.data
  )
  const searchResultsPage: any = useAppSelector(
    (state) => state.preference.searchResultsPage
  )
  const [buttonArray, setButtonArray] = useState<{
    start: number
    end: number
    pageNr: number
  }>({ start: 0, end: 9, pageNr: 1 })
  const buttonHelper = (i: number) => {
    // setButtonArray({ start: i * 10, end: (i + 1) * 10 - 1 })
    setButtonArray({ start: i * 10, end: (i + 1) * 10 - 1, pageNr: i + 1 })
    console.log(buttonArray)
    dispatch(
      searchResultsPageSaved({
        start: i * 10,
        end: (i + 1) * 10 - 1,
        pageNr: i + 1,
      })
    )
  }
  return (
    <PaginateWrapper>
      {searchResults.length % 10 > 0
        ? Array.from(
            { length: Math.floor(searchResults.length / 10) + 1 },
            (_, i) => (
              <SendButtonVerySmall
                key={i}
                variant='secondaryEmpty'
                onClick={() => buttonHelper(i)}
              >
                <PaginateActive
                  pageActive={searchResultsPage.pageNr === i + 1 ? true : false}
                >
                  {i + 1}
                </PaginateActive>
              </SendButtonVerySmall>
            )
          )
        : Array.from({ length: searchResults.length / 10 }, (_, i) => (
            <SendButtonVerySmall key={i} variant='secondaryEmpty'>
              {i + 1}
            </SendButtonVerySmall>
          ))}
    </PaginateWrapper>
  )
}
export default Pagination
