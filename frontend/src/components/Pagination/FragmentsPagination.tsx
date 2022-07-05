import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { fragmentsPageSaved } from '../../features/preferences/preferenceSlice'
import { SendButtonVerySmall } from '../Buttons/Buttons.styled'
import {
  PaginateActive,
  PaginateBorderWrapper,
  PaginateWrapper,
} from './Paginate.styled'

interface FragmentsPaginationProps {}

const FragmentsPagination: React.FC<FragmentsPaginationProps> = () => {
  const dispatch = useAppDispatch()
  const userFragments: any = useAppSelector(
    (state) => state.fragment.userFragments
  )
  const savedFragmentsPage: any = useAppSelector(
    (state) => state.preference.savedFragmentsPage
  )

  const buttonHelper = (i: number) => {
    dispatch(
      fragmentsPageSaved({
        start: i * 10,
        end: (i + 1) * 10 - 1,
        pageNr: i + 1,
      })
    )
  }
  return (
    <PaginateWrapper>
      {userFragments.length % 10 > 0
        ? Array.from(
            { length: Math.floor(userFragments.length / 10) + 1 },
            (_, i) => (
              <PaginateBorderWrapper key={i}>
                <SendButtonVerySmall
                  variant='secondaryEmpty'
                  onClick={() => buttonHelper(i)}
                >
                  <PaginateActive
                    pageActive={
                      savedFragmentsPage.pageNr === i + 1 ? true : false
                    }
                  >
                    {i + 1}
                  </PaginateActive>
                </SendButtonVerySmall>
              </PaginateBorderWrapper>
            )
          )
        : Array.from({ length: userFragments.length / 10 }, (_, i) => (
            <SendButtonVerySmall key={i} variant='secondaryEmpty'>
              {i + 1}
            </SendButtonVerySmall>
          ))}
    </PaginateWrapper>
  )
}
export default FragmentsPagination
