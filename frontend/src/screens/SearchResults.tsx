import React from 'react'
import DataSection from '../components/InfoSection/DataSection'
import { UserInfo } from '../interfaces'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import {
  getSearchResults,
  getDocResult,
  getDocByNr,
} from '../features/searchResults/searchResultsSlice'

import SideMenuSecondary from '../components/SideMenu/SideMenuSecondary'
import { SendButton } from '../components/Buttons/Buttons.styled'

interface SearchResultsProps {}

const SearchResults: React.FC<SearchResultsProps> = () => {
  const dispatch = useAppDispatch()

  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)

  const searchResults: any = useAppSelector(
    (state) => state.searchResult.searchResults
  )

  const { data, query } = searchResults
  const queryTrimmed = encodeURIComponent(query?.trim())
  const submitHandler = (e: any) => {
    e.preventDefault()

    const query = 'poczta'
    //? the following is not accepted by the Api endpoint, what is the difference?
    // dispatch(getSearchResults(query.replace(/ /g, '%20')))
    //? this method works well
    const queryTrimmed = encodeURIComponent(query.trim())
    dispatch(getSearchResults(queryTrimmed))
  }

  const submitHandlerDoc = (e: any) => {
    e.preventDefault()

    const searchquery = {
      query: 'sp%C3%B3%C5%82ki+skarbu+pa%C5%84stwa',
      selectedDoc: 1,
      docNumber: 85725494,
    }

    dispatch(getDocResult(searchquery))
  }
  const submitHandlerDocNr = (e: any) => {
    e.preventDefault()
    const nr = 85725494
    dispatch(getDocByNr(nr))
  }
  return (
    <div>
      <SideMenuSecondary
        mainData={
          <>
            {data.length > 0 &&
              data.map((fragmentArray: any) => (
                <DataSection
                  variant='secondary'
                  key={fragmentArray['uuid']}
                  paddingTop='large'
                  // imgStart
                  topline='Topline 1'
                  headline='headline 1'
                  subtitle='lorem subtitle 1'
                  fragmentsFound={fragmentArray.fragment}
                  metryka={fragmentArray.metryka}
                  query={queryTrimmed}
                />
              ))}
          </>
        }
      >
        {Object.keys(userInfo).length > 0 ? (
          <>
            <SendButton onClick={submitHandler}>Search Test</SendButton>
            <SendButton variant='success' onClick={submitHandlerDoc}>
              get Doc test TEST TEST
            </SendButton>
            <SendButton variant='secondary' onClick={submitHandlerDocNr}>
              get Doc nr test
            </SendButton>
          </>
        ) : (
          <>
            {' '}
            <SendButton onClick={submitHandler}>Search Test</SendButton>
            <SendButton variant='success' onClick={submitHandlerDoc}>
              get Doc test TEST TEST
            </SendButton>
            <SendButton variant='secondary' onClick={submitHandlerDocNr}>
              get Doc nr test
            </SendButton>
          </>
        )}
      </SideMenuSecondary>
    </div>
  )
}
export default SearchResults
