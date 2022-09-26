import React from 'react'
import { SendButtonVerySmall } from '../Buttons/Buttons.styled'
import { useAppSelector } from '../../../app/reduxHooks'
import {
  VisitedLinkPar,
  VisitedLinkRow,
  VisitedLinkWrapper,
} from './VisitedLinks.styled'
import LinksPagination from '../Pagination/LinksPagination'
import { NavLink } from 'react-router-dom'

interface VisitedLinksProps {}

const VisitedLinks: React.FC<VisitedLinksProps> = () => {
  const visitedLinks: any[] = useAppSelector(
    (state) => state.searchResult.visitedLinks
  )
  const visitedLinksPage: any = useAppSelector(
    (state) => state.preference.visitedLinksPage
  )
  const { start, end } = visitedLinksPage
  const copyHandler = (id: string, query: string) => {
    if (id && query) {
      // navigator.clipboard.writeText(`/search/result/${id}/${query}`)
      navigator.clipboard.writeText(
        // ! here change to
        // ! here change to
        `http://lexbis.netlify.app/search/result/${id}/${query}`
        // `http://localhost:3000/search/result/${id}/${query}`
      )
    }
  }
  // const copyHandler = (doc_link: string) => {
  //   if (doc_link) {
  //     navigator.clipboard.writeText(doc_link)
  //   }
  // }

  return (
    <div>
      {visitedLinks.length > 1 &&
        visitedLinks
          .filter((linkSorted) => linkSorted.test === false || !linkSorted.test)
          .slice(start, end + 1)
          .map((link: any) => (
            <VisitedLinkWrapper key={Math.random()}>
              <VisitedLinkRow>
                <NavLink to={`/search/result/${link.id}/${link.query}`}>
                  <VisitedLinkPar>
                    {link.query.replace('%20', ' ')} | {link.data} |{' '}
                    {link.rodzaj_orzeczenia}
                  </VisitedLinkPar>
                </NavLink>
                <SendButtonVerySmall
                  variant='lightEmpty'
                  // onClick={() => copyHandler(link.doc_link)}
                  onClick={() => copyHandler(link.id, link.query)}
                >
                  kopiuj link
                </SendButtonVerySmall>
              </VisitedLinkRow>
            </VisitedLinkWrapper>
          ))}
      {visitedLinks.length > 3 && <LinksPagination miniVersion />}
    </div>
  )
}
export default VisitedLinks
