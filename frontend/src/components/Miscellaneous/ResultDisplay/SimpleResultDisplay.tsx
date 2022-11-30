import React, { useEffect, useMemo } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/reduxHooks'
import parse from 'html-react-parser'
import HighlightPopMenu from '../HighlightPopRemake/HighlightPopMenu'
import {
  ArticleWrapper,
  ArticleTitle,
  ArticleSection,
  ArticleTopline,
  ArticleParagraph,
  ArticleContainer,
} from './ResultDisplay.styled'
import { getDocByIdAndQuery } from '../../../features/searchResults/searchResultsSlice'
import { LoadingAbsolutePopup } from '../../../styles/misc.styled'
import { AnimatePresence } from 'framer-motion'

interface SimpleResultDisplayProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'blue'
  imgStart?: boolean
}

const SimpleResultDisplay: React.FC<SimpleResultDisplayProps> = () => {
  const dispatch = useAppDispatch()
  const docResult: any = useAppSelector((state) => state.searchResult.docResult)
  const searchResult: any = useAppSelector((state) => state.searchResult)
  const heroDocIndex: number = useAppSelector(
    (state) => state.searchResult.heroDocIndex
  )
  const { data, query } = searchResult.searchResults
  const { loadingDoc } = searchResult

  useEffect(() => {
    const searchquery = {
      query: query,
      docNumber: data[heroDocIndex].doc_id,
    }

    const { data: resultData } = docResult
    if (data?.length > 0 && resultData?.length === 0) {
      dispatch(getDocByIdAndQuery(searchquery))
    }
  }, [heroDocIndex, dispatch, data, query, docResult])

  return (
    <ArticleContainer>
      {loadingDoc ? (
        <AnimatePresence exitBeforeEnter>
          <LoadingAbsolutePopup
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Ładowanie dokumentu ...
          </LoadingAbsolutePopup>
        </AnimatePresence>
      ) : null}

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
export default SimpleResultDisplay
