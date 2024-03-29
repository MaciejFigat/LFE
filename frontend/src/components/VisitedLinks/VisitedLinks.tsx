import React from 'react'
import { useAppSelector } from '../../app/reduxHooks'
import {
  VisitedLinkPar,
  VisitedLinkRow,
  VisitedLinkWrapper
} from './VisitedLinks.styled'
import LinksPagination from '../Miscellaneous/Pagination/LinksPagination'
import { NavLink } from 'react-router-dom'
import { ButtonSmall, ButtonVerySmall } from '../ButtonsSend/BigButton.styled'
import { VisitedLink, VisitedLinksPage } from '../../interfaces'
import { RegularScrollYDiv } from '../../styles/misc.styled'

interface VisitedLinksProps {
  large?: boolean
}

const VisitedLinks: React.FC<VisitedLinksProps> = ({ large }) => {
  const visitedLinks: VisitedLink[] = useAppSelector(
    state => state.searchResult.visitedLinks
  )
  const visitedLinksPage: VisitedLinksPage = useAppSelector(
    state => state.preference.visitedLinksPage
  )
  const { start, end } = visitedLinksPage
  const copyHandler = (id: string, query: string) => {
    if (id && query) {
      navigator.clipboard.writeText(
        `http://lexbis.netlify.app/search/result/${id}/${query}`
      )
    }
  }

  return (
    <RegularScrollYDiv>
      {visitedLinks.length > 1 &&
        visitedLinks
          .filter(linkSorted => linkSorted.test === false || !linkSorted.test)
          .slice(start, end + 1)
          .map((link: any) => (
            <VisitedLinkWrapper key={Math.random()} large={large}>
              <VisitedLinkRow large={large}>
                <NavLink to={`/search/result/${link.id}/${link.query}`}>
                  <VisitedLinkPar>
                    {link.query.replace('%20', ' ')} | {link.data} |{' '}
                    {link.rodzaj_orzeczenia.substring(0, 16)}.
                  </VisitedLinkPar>
                </NavLink>

                {large ? (
                  <ButtonSmall
                    variant='secondary'
                    onClick={() => copyHandler(link.id, link.query)}
                  >
                    {' '}
                    kopiuj
                  </ButtonSmall>
                ) : (
                  <ButtonVerySmall
                    variant='secondary'
                    onClick={() => copyHandler(link.id, link.query)}
                  >
                    kopiuj
                  </ButtonVerySmall>
                )}
              </VisitedLinkRow>
            </VisitedLinkWrapper>
          ))}
      {visitedLinks.length > 3 ? <LinksPagination miniVersion /> : null}
    </RegularScrollYDiv>
  )
}
export default VisitedLinks
