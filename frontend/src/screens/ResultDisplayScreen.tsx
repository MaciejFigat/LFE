// import React, { useEffect } from 'react'
import React from 'react'
import ResultDisplay from '../components/ResultDisplay/ResultDisplay'
// import { ArticleById } from '../interfaces'
// import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
// import { getArticleById } from '../features/articles/articleSlice'
// import { getDocResult } from '../features/searchResults/searchResultsSlice'
// import { useParams } from 'react-router-dom'

interface ResultDisplayScreenProps {}

const ResultDisplayScreen: React.FC<ResultDisplayScreenProps> = () => {
  // const dispatch: any = useAppDispatch()
  // const params = useParams()

  // const docResult: any = useAppSelector((state) => state.searchResult.docResult)

  // useEffect(() => {
  //   const docQuery = {
  //     searchquery: 'dochodowy',
  //     selectedDoc: 2,
  //     docNumber: 26042463,
  //   }
  //   dispatch(getDocResult(docQuery))
  // }, [dispatch])

  return (
    <>
      {/* <ResultDisplay data={docResult} /> */}
      <ResultDisplay />
    </>
  )
}
export default ResultDisplayScreen
