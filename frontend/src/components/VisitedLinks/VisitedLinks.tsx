import React from 'react'
import { SendButtonSmall, SendButtonVerySmall } from '../Buttons/Buttons.styled'
import { useAppSelector } from '../../app/reduxHooks'

interface VisitedLinksProps {}

const VisitedLinks: React.FC<VisitedLinksProps> = () => {
  const visitedLinks: any[] = useAppSelector(
    (state) => state.searchResult.visitedLinks
  )
  const copyHandler = (highlightedText: string) => {
    navigator.clipboard.writeText(highlightedText)
    if (highlightedText) {
      navigator.clipboard.writeText(highlightedText)
    }
  }
  return (
    <div>
      {visitedLinks.length > 1 &&
        visitedLinks
          .filter((linkSorted) => linkSorted.test === false || !linkSorted.test)

          .map((link: any) => (
            <div key={Math.random()}>
              <SendButtonVerySmall
                variant='darkEmpty'
                // onClick={showLinksHandler}
              >
                {link.rodzaj_orzeczenia} | {link.data}
              </SendButtonVerySmall>
              <SendButtonSmall variant='lightEmpty'>
                kopiuj link
              </SendButtonSmall>
            </div>
          ))}
    </div>
  )
}
export default VisitedLinks
