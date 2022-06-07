import React from 'react'
import HighlightPopMenu from '../components/HighlightPopRemake/HighlightPopMenu'
import DataSection from '../components/InfoSection/DataSection'
import { UserInfo } from '../interfaces'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import {
  getSearchResults,
  getSearchResultsTwo,
  getDocResult,
} from '../features/searchResults/searchResultsSlice'
import UserFragmentsColumn from '../components/FragmentsColumn/UserFragmentsColumn'
import FragmentsColumn from '../components/FragmentsColumn/FragmentsColumn'
import SideMenuSecondary from '../components/SideMenu/SideMenuSecondary'
import { SendButton } from '../components/Buttons/Buttons.styled'

interface SearchResultsProps {}

const SearchResults: React.FC<SearchResultsProps> = () => {
  const dispatch = useAppDispatch()

  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)

  const searchResults: any = useAppSelector(
    (state) => state.searchResult.searchResults
  )

  const { data } = searchResults

  const submitHandler = (e: any) => {
    e.preventDefault()

    const query = 'podatek dochodowy'
    //? the following is not accepted by the Api endpoint, what is the difference?
    // dispatch(getSearchResults(query.replace(/ /g, '%20')))
    //? this method works well
    const queryTrimmed = encodeURIComponent(query.trim())
    dispatch(getSearchResults(queryTrimmed))
  }

  const docQuery = {
    searchquery: 'dochodowy',
    selectedDoc: 2,
    docNumber: 26042463,
  }
  const submitHandlerDoc = (e: any) => {
    e.preventDefault()
    dispatch(getDocResult(docQuery))
    console.log('test')
  }
  return (
    <div>
      <SideMenuSecondary
        mainData={
          <HighlightPopMenu>
            <SendButton onClick={submitHandler}>Search Test</SendButton>
            <SendButton variant='success' onClick={submitHandlerDoc}>
              get Doc test
            </SendButton>
            {data.length > 0 &&
              data.map((fragmentArray: any) => (
                <DataSection
                  variant='primary'
                  key={fragmentArray['uuid']}
                  paddingTop='large'
                  // data={Data}
                  topline='Topline 1'
                  headline='headline 1'
                  subtitle='lorem subtitle 1'
                  fragmentsFound={fragmentArray.fragment}
                  metryka={fragmentArray.metryka}
                >
                  {/* {fragmentArray.fragment.map((fragment: any) => (
                    <div>{parse(fragment)}</div>
                  ))} */}
                </DataSection>
              ))}
          </HighlightPopMenu>
        }
      >
        {Object.keys(userInfo).length > 0 ? (
          <UserFragmentsColumn />
        ) : (
          <FragmentsColumn />
        )}
      </SideMenuSecondary>
    </div>
  )
}
export default SearchResults
