import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { AppDispatch } from '../../../app/store'
import { searchResultsPageSaved } from '../../../features/preferences/preferenceSlice'
import {
  PaginateActive,
  PaginateBorderWrapper,
  PaginateWrapper
} from './Paginate.styled'
import { ButtonVerySmall } from '../../Buttons/Buttons.styled'

interface PaginationProps {
  narrow?: boolean
}

const Pagination: React.FC<PaginationProps> = ({ narrow }) => {
  const dispatch: AppDispatch = useAppDispatch()
  const searchResults: any = useAppSelector(
    state => state.searchResult.searchResults.data
  )
  const searchResultsPage: any = useAppSelector(
    state => state.preference.searchResultsPage
  )

  const buttonHelper = (i: number) => {
    dispatch(
      searchResultsPageSaved({
        start: i * 10,
        end: (i + 1) * 10 - 1,
        pageNr: i + 1
      })
    )
  }
  return (
    <PaginateWrapper narrow={narrow}>
      {searchResults?.length % 10 > 0
        ? Array.from(
            //! here I would insert the filter based on advanced options
            //* { length: Math.floor(searchResults.filter HERE.length / 10) + 1 },
            { length: Math.floor(searchResults?.length / 10) + 1 },
            (_, i) => (
              <PaginateBorderWrapper key={i} narrow={narrow}>
                <ButtonVerySmall
                  variant='lightEmpty'
                  onClick={() => buttonHelper(i)}
                >
                  <PaginateActive
                    pageActive={
                      searchResultsPage.pageNr === i + 1 ? true : false
                    }
                  >
                    {i + 1}
                  </PaginateActive>
                </ButtonVerySmall>
              </PaginateBorderWrapper>
            )
          )
        : Array.from({ length: searchResults?.length / 10 }, (_, i) => (
            <ButtonVerySmall key={i} variant='secondaryEmpty'>
              {i + 1}
            </ButtonVerySmall>
          ))}
    </PaginateWrapper>
  )
}
export default Pagination
