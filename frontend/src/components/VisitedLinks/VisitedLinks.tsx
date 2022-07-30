import React from 'react'
import { SendButtonSmall, SendButtonVerySmall } from '../Buttons/Buttons.styled'
import { useAppSelector } from '../../app/reduxHooks'

interface VisitedLinksProps {}

const VisitedLinks: React.FC<VisitedLinksProps> = () => {
  const visitedLinks: any[] = useAppSelector(
    (state) => state.searchResult.visitedLinks
  )
  const copyHandler = (doc_link: string) => {
    if (doc_link) {
      navigator.clipboard.writeText(doc_link)
    }
  }
  return (
    <div>
      <h3>Ostatnio przeglądane</h3>
      {visitedLinks.length > 1 &&
        visitedLinks
          .filter((linkSorted) => linkSorted.test === false || !linkSorted.test)

          .map((link: any) => (
            <div key={Math.random()}>
              <SendButtonVerySmall variant='secondaryEmpty'>
                {link.rodzaj_orzeczenia} | {link.data}
              </SendButtonVerySmall>
              <SendButtonSmall
                variant='lightEmpty'
                onClick={() => copyHandler(link.doc_link)}
              >
                kopiuj link
              </SendButtonSmall>
            </div>
          ))}
    </div>
  )
}
export default VisitedLinks
