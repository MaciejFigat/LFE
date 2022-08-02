import React from 'react'
import { SendButtonSmall } from '../Buttons/Buttons.styled'
import { useAppSelector } from '../../app/reduxHooks'
import { VisitedLinkRow, VisitedLinkWrapper } from './VisitedLinks.styled'
import LinksPagination from '../Pagination/LinksPagination'

interface VisitedLinksProps {}

const VisitedLinks: React.FC<VisitedLinksProps> = () => {
  const visitedLinks: any[] = useAppSelector(
    (state) => state.searchResult.visitedLinks
  )
  const visitedLinksPage: any = useAppSelector(
    (state) => state.preference.visitedLinksPage
  )
  const { start, end } = visitedLinksPage
  const copyHandler = (doc_link: string) => {
    if (doc_link) {
      navigator.clipboard.writeText(doc_link)
    }
  }
  return (
    <div>
      {/* <h3>Ostatnio przeglądane</h3> */}
      {visitedLinks.length > 3 && <LinksPagination narrow />}
      {visitedLinks.length > 1 &&
        visitedLinks
          .filter((linkSorted) => linkSorted.test === false || !linkSorted.test)
          .slice(start, end + 1)
          .map((link: any) => (
            <VisitedLinkWrapper key={Math.random()}>
              <VisitedLinkRow>
                {link.rodzaj_orzeczenia} | {link.data}
                <SendButtonSmall
                  variant='lightEmpty'
                  onClick={() => copyHandler(link.doc_link)}
                >
                  kopiuj link
                </SendButtonSmall>
              </VisitedLinkRow>
            </VisitedLinkWrapper>
          ))}
    </div>
  )
}
export default VisitedLinks
