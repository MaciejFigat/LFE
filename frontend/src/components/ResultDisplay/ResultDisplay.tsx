import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { getDocResult } from '../../features/searchResults/searchResultsSlice'
import {
  ArticleWrapper,
  ArticleTitle,
  ArticleSection,
  ArticleTopline,
} from './ResultDisplay.styled'

interface ResultDisplayProps {
  // data: any
  // data: ArticleById
  // variant?: 'primary' | 'secondary' | 'tertiary' | 'blue'
  imgStart?: boolean
}

const ResultDisplay: React.FC<ResultDisplayProps> = () => {
  const dispatch: any = useAppDispatch()
  const docResult: any = useAppSelector((state) => state.searchResult.docResult)

  useEffect(() => {
    const docQuery = {
      searchquery: 'dochodowy',
      selectedDoc: 2,
      docNumber: 26042463,
    }
    dispatch(getDocResult(docQuery))
  }, [dispatch])
  return (
    <ArticleWrapper>
      {/* <h5>{data.createdAt.substring(0, 10)}</h5> */}
      <button onClick={() => console.log(docResult)}>
        TEST docResult.length
      </button>
      {docResult?.tresc?.sad && (
        <>
          {' '}
          <p> {docResult.tresc.sad}</p>
          <ArticleTopline>{docResult.tresc.syg}</ArticleTopline>
          <ArticleTitle> {docResult.tresc.docResultOrzeczenia}</ArticleTitle>
          <ArticleTitle>{docResult.tresc.typWyroku}</ArticleTitle>
          {/* <ArticleTopline>{docResult.topline}</ArticleTopline> */}
          {/* <ArticleImage src={docResult.imgLink} alt='article ilustration' /> */}
          <ArticleSection>{docResult.korpus[0][0]}</ArticleSection>
        </>
      )}
    </ArticleWrapper>
  )
}
export default ResultDisplay
