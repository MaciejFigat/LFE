import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { getDocResult } from '../../features/searchResults/searchResultsSlice'
import {
  ArticleWrapper,
  ArticleTitle,
  ArticleSection,
  ArticleTopline,
  ArticleParagraph,
} from './ResultDisplay.styled'

interface ResultDisplayProps {
  // data: any
  // data: ArticleById
  // variant?: 'primary' | 'secondary' | 'tertiary' | 'blue'
  imgStart?: boolean
}

const ResultDisplay: React.FC<ResultDisplayProps> = () => {
  // const dispatch: any = useAppDispatch()
  const docResult: any = useAppSelector((state) => state.searchResult.docResult)

  // useEffect(() => {
  //   const docQuery = {
  //     query: 'dochodowy',
  //     selectedDoc: 2,
  //     docNumber: 26042463,
  //   }
  //   dispatch(getDocResult(docQuery))
  // }, [dispatch])
  useEffect(() => {}, [])
  return (
    <ArticleWrapper>
      {docResult?.tresc?.sad && (
        // {docResult.length > 0 && (
        <>
          {' '}
          <ArticleTitle>{docResult.tresc.typWyroku}</ArticleTitle>
          <ArticleParagraph> {docResult.tresc.sad}</ArticleParagraph>
          <ArticleTopline>{docResult.tresc.syg}</ArticleTopline>
          <ArticleParagraph> {docResult.tresc.dataOrzeczenia}</ArticleParagraph>
          <>
            {' '}
            {docResult.korpus
              // .filter((fragment:string) =>
              //   fragment.startsWith('ISTOTA INTERPRETACJI')
              // )
              .map((korpusElement: any, index: number) => (
                // <div key={fragment}>
                //
                <ArticleSection key={index}>
                  {korpusElement.map((korpusParagraph: any, index: number) => (
                    <ArticleTopline key={index}>
                      {!Array.isArray(korpusParagraph) && korpusParagraph}
                      {Array.isArray(korpusParagraph) &&
                        korpusParagraph.map(
                          (smallParagraph: any, index: number) => (
                            <ArticleParagraph>
                              {smallParagraph}
                            </ArticleParagraph>
                          )
                        )}
                    </ArticleTopline>
                  ))}
                </ArticleSection>
              ))}
          </>
          {/* <ArticleSection>{docResult.korpus[0][0]}</ArticleSection> */}
        </>
      )}
    </ArticleWrapper>
  )
}
export default ResultDisplay
