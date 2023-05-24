import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import parse from 'html-react-parser'
import HighlightPopMenu from '../HighlightPopRemake/HighlightPopMenu'
import {
  ArticleWrapper,
  ArticleTitle,
  ArticleSection,
  ArticleTopline,
  ArticleParagraph,
  ArticleContainer
} from './ResultDisplay.styled'
import SideButtons from '../SideButtons/SideButtons'
import ScrollToElementHelper from '../../../hooks/ScrollToElementHelper'

interface ResultDisplayProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'blue'
  imgStart?: boolean
}

const ResultDisplay: React.FC<ResultDisplayProps> = () => {
  const docResult: any = useAppSelector(state => state.searchResult.docResult)
  const { frags: highlightedFragments } = docResult
  const [hashIds, setHashIds] = useState<string[]>([])

  //! useEffect to look for id's: frag-0, frag-1 etc.
  useEffect(() => {
    const idArray: string[] = []
    if (highlightedFragments) {
      for (let i = 0; i < highlightedFragments.length; i++) {
        idArray.push(`frag-${i}`)
      }
      setHashIds(idArray)
    }
  }, [highlightedFragments])

  return (
    <ArticleContainer>
      <ScrollToElementHelper />
      <SideButtons hashIds={hashIds} />

      <ArticleWrapper>
        {docResult?.tresc?.sad && (
          <>
            {' '}
            <ArticleTitle>{docResult.tresc.typWyroku}</ArticleTitle>
            <ArticleTopline> {docResult.tresc.sad}</ArticleTopline>
            <ArticleTopline>{docResult.tresc.syg}</ArticleTopline>
            <ArticleTopline>
              {' '}
              {docResult.tresc.dataOrzeczenia}
            </ArticleTopline>{' '}
            <HighlightPopMenu>
              {docResult.korpus.map((korpusElement: any) => (
                <ArticleSection key={Math.random()}>
                  {korpusElement.map((korpusParagraph: any) => (
                    <div key={Math.random()}>
                      {!korpusParagraph.toString().startsWith('TRESC') &&
                        !Array.isArray(korpusParagraph) && (
                          <ArticleParagraph>
                            {parse(korpusParagraph)}
                          </ArticleParagraph>
                        )}

                      {Array.isArray(docResult.frags) &&
                        Array.isArray(korpusParagraph) &&
                        korpusParagraph.map((smallParagraph: any) => (
                          <ArticleParagraph key={Math.random()}>
                            {parse(smallParagraph)}
                          </ArticleParagraph>
                        ))}
                    </div>
                  ))}
                </ArticleSection>
              ))}
            </HighlightPopMenu>
          </>
        )}
      </ArticleWrapper>
    </ArticleContainer>
  )
}
export default ResultDisplay
