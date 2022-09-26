import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { linksPageSaved } from '../../../features/preferences/preferenceSlice'
import { SendButtonVerySmall } from '../Buttons/Buttons.styled'
import {
  PaginateActive,
  PaginateBorderWrapper,
  PaginateWrapper,
} from './Paginate.styled'

interface LinksPaginationProps {
  narrow?: boolean
  miniVersion?: boolean
}

const LinksPagination: React.FC<LinksPaginationProps> = ({
  narrow,
  miniVersion,
}) => {
  const dispatch = useAppDispatch()
  const visitedLinksPage: any = useAppSelector(
    (state) => state.preference.visitedLinksPage
  )

  const visitedLinks: any = useAppSelector(
    (state) => state.searchResult.visitedLinks
  )
  const buttonHelper = (i: number) => {
    dispatch(
      linksPageSaved({
        start: i * 3,
        end: (i + 1) * 3 - 1,
        pageNr: i + 1,
      })
    )
  }
  return (
    <>
      <PaginateWrapper narrow={narrow} miniVersion={miniVersion}>
        {visitedLinks.length % 4 > 0
          ? Array.from(
              { length: Math.floor(visitedLinks.length / 3) + 1 },
              (_, i) => (
                <PaginateBorderWrapper
                  key={i}
                  narrow={narrow}
                  miniVersion={miniVersion}
                >
                  <SendButtonVerySmall
                    variant='secondaryEmpty'
                    onClick={() => buttonHelper(i)}
                  >
                    <PaginateActive
                      miniVersion={miniVersion}
                      pageActive={
                        visitedLinksPage.pageNr === i + 1 ? true : false
                      }
                    >
                      {i + 1}
                    </PaginateActive>
                  </SendButtonVerySmall>
                </PaginateBorderWrapper>
              )
            )
          : Array.from({ length: visitedLinks.length / 3 }, (_, i) => (
              <SendButtonVerySmall key={i} variant='secondaryEmpty'>
                {i + 1}
              </SendButtonVerySmall>
            ))}
      </PaginateWrapper>
    </>
  )
}
export default LinksPagination
