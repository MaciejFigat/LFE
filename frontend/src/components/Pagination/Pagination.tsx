import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { SendButtonVerySmall } from '../Buttons/Buttons.styled'
import { PaginateWrapper } from './Paginate.styled'

interface PaginationProps {}

const Pagination: React.FC<PaginationProps> = () => {
  const searchResults: any = useAppSelector(
    (state) => state.searchResult.searchResults.data
  )
  const [buttonArray, setButtonArray] = useState<{
    start: number
    end: number
  }>({ start: 0, end: 9 })
  const buttonHelper = (i: number) => {
    setButtonArray({ start: i * 10, end: (i + 1) * 10 - 1 })
    console.log(buttonArray)
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
                {i + 1}
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
