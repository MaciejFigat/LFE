import React from 'react'
import { useAppSelector } from '../../app/reduxHooks'
import HighlightPopMenu from '../../components/HighlightPopRemake/HighlightPopMenu'
import {
  ArticleWrapper,
  ArticleTitle,
  ArticleSection,
  ArticleTopline,
  ArticleParagraph,
  ArticleParagraphFragment,
  ArticleContainer,
} from './ResultDisplay.styled'

interface ResultDisplayProps {
  // variant?: 'primary' | 'secondary' | 'tertiary' | 'blue'
  imgStart?: boolean
}

const ResultDisplay: React.FC<ResultDisplayProps> = () => {
  const docResult: any = useAppSelector((state) => state.searchResult.docResult)

  return (
    <ArticleContainer>
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
                    <ArticleParagraph key={Math.random()}>
                      {!korpusParagraph.toString().startsWith('TRESC') &&
                        !Array.isArray(korpusParagraph) &&
                        korpusParagraph}
                      {Array.isArray(docResult.frags) &&
                        Array.isArray(korpusParagraph) &&
                        korpusParagraph.map((smallParagraph: any) => (
                          <div key={Math.random()}>
                            {docResult.frags.every((item: any) =>
                              smallParagraph.includes(item.substring(30, 90))
                            ) ? (
                              <ArticleParagraphFragment key={Math.random()}>
                                {smallParagraph}
                              </ArticleParagraphFragment>
                            ) : (
                              <ArticleParagraph key={Math.random()}>
                                {smallParagraph}
                              </ArticleParagraph>
                            )}
                          </div>
                        ))}
                    </ArticleParagraph>
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
