import React, { useEffect } from 'react'
import { useAppSelector } from '../../app/reduxHooks'
import HighlightPopMenu from '../../components/HighlightPopRemake/HighlightPopMenu'
import {
  ArticleWrapper,
  ArticleTitle,
  ArticleSection,
  ArticleTopline,
  ArticleParagraph,
  ArticleParagraphFragment,
} from './ResultDisplay.styled'

interface ResultDisplayProps {
  // data: any
  // data: ArticleById
  // variant?: 'primary' | 'secondary' | 'tertiary' | 'blue'
  imgStart?: boolean
}

const ResultDisplay: React.FC<ResultDisplayProps> = () => {
  const docResult: any = useAppSelector((state) => state.searchResult.docResult)
  // const { frags: fragmentsMatched } = docResult.frags

  // useEffect(() => {}, [])
  return (
    <ArticleWrapper>
      {docResult?.tresc?.sad && (
        <>
          {' '}
          <ArticleTitle>{docResult.tresc.typWyroku}</ArticleTitle>
          <ArticleParagraph> {docResult.tresc.sad}</ArticleParagraph>
          <ArticleTopline>{docResult.tresc.syg}</ArticleTopline>
          <ArticleParagraph>
            {' '}
            {docResult.tresc.dataOrzeczenia}
          </ArticleParagraph>{' '}
          <HighlightPopMenu>
            {docResult.korpus.map((korpusElement: any) => (
              <ArticleSection key={Math.random()}>
                {korpusElement.map((korpusParagraph: any) => (
                  <ArticleParagraph key={Math.random()}>
                    {!korpusParagraph.toString().startsWith('TRESC') &&
                      !Array.isArray(korpusParagraph) &&
                      korpusParagraph}
                    {/* //todo 
                 //todo   .filter(
                      (fragmentsSorted) =>
                        !fragmentsSorted.includes('')
                    )
                    fragmentsMatched
                  //todo  .includes() */}
                    {Array.isArray(docResult.frags) &&
                      Array.isArray(korpusParagraph) &&
                      korpusParagraph.map((smallParagraph: any) => (
                        <>
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
                        </>
                      ))}
                    {/* //?working version below */}
                    {/* {Array.isArray(korpusParagraph) &&
                      korpusParagraph.map(
                        (smallParagraph: any, index: number) => (
                          <ArticleParagraph>{smallParagraph}</ArticleParagraph>
                        )
                      )} */}
                  </ArticleParagraph>
                ))}
              </ArticleSection>
            ))}
          </HighlightPopMenu>
        </>
      )}
    </ArticleWrapper>
  )
}
export default ResultDisplay
