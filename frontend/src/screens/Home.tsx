import React from 'react'
import Toast from '../components/Toast/Toast'
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
import HomeWelcome from '../components/InfoSection/HomeWelcome'

const Home: React.FC = () => {
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
      // query: 'spółki skarbu państwa',
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
    <>
      <Toast option='registerUser' />

      <SideMenuSecondary
        mainData={
          <>
            {data.length === 0 && <HomeWelcome variant='primary' />}
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
    </>
  )
}
export default Home
