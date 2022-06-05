import React from 'react'
import HighlightPopMenu from '../components/HighlightPopRemake/HighlightPopMenu'
import DataSection from '../components/InfoSection/DataSection'
import { UserInfo } from '../interfaces'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { getSearchResults } from '../features/searchResults/searchResultsSlice'
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

  return (
    <div>
      <SideMenuSecondary
        mainData={
          <HighlightPopMenu>
            <SendButton onClick={submitHandler}>Testing the A's DB</SendButton>
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
            {/* //! problem solved with parse - html-react-parser - prarses string to html in React */}
            {/* {data.length > 0 && parse(data[0].fragment[0])} */}
            {/* {data.length > 0 &&
              data.map((fragmentArray: any) => (
                <div key={fragmentArray['uuid']}>
                  <h1>
                    {fragmentArray.fragment.map((fragment: any) => (
                      <div>
                        <h2>{parse(fragment)}</h2>
                      </div>
                    ))}
                  </h1>
                </div>
              ))} */}

            {/* {data.length > 0 && <div>{parse(data[0].fragment[0])}</div>} */}
            {/* <DataSection
              variant='primary'
              paddingTop='large'
              data={Data}
            ></DataSection>
            <DataSection variant='secondary' paddingTop='small' data={Data} />
            <DataSection paddingTop='small' data={Data} />
            <DataSection variant='tertiary' paddingTop='small' data={Data} />
            <DataSection variant='blue' paddingTop='small' data={Data} />
            <DataSection variant='transparent' paddingTop='small' data={Data} /> */}
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
