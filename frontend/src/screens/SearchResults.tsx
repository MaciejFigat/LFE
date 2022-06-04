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
import parse from 'html-react-parser'

interface SearchResultsProps {}

export const Data = {
  topline: 'ISTOTA INTERPRETACJI:',
  headline:
    'w zakresie możliwości zaliczenia do kosztów uzyskania przychodów prowadzonej działalności gospodarczej opłaty za obronę pracy doktorskiej',
  fragmentsFound: [
    '(...) dochodowego od osób fizycznych w zakresie możliwości zaliczenia do kosztów uzyskania przychodów prowadzonej działalności gospodarczej opłaty za obronę pracy doktorskiej - jest prawidłowe. (...)',
    '(...) w zakresie możliwości zaliczenia do kosztów uzyskania przychodów prowadzonej działalności gospodarczej opłaty za obronę pracy doktorskiej. We wniosku przedstawiono następujące zdarzenie (...)',
    '(...) jak oprogramowanie komputerowe oraz programu prawniczego. W związku z powyższym opisem zadano następujące pytanie. Czy koszty związane z obroną pracy doktorskiej będą stanowiły koszty (...)',
    '(...) uzyskania przychodów z tytułu prowadzenia pozarolniczej działalności gospodarczej w zakresie usług prawnych? Zdaniem Wnioskodawczyni, wydatki na obronę doktorską można zaliczyć do kosztów (...)',
  ],

  subtitle:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perspiciatis non deleniti doloremque, iure laudantium quaerat esse odit. Similique nihil voluptate voluptatem sed tempora sunt libero, saepe corrupti laboriosam suscipit.',
}

const SearchResults: React.FC<SearchResultsProps> = () => {
  const dispatch = useAppDispatch()

  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)

  const searchResults: any = useAppSelector(
    (state) => state.searchResult.searchResults
  )
  // const { data: searchResultsData } = searchResults
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
  // type FragmentArray = {
  //   metryka: {}
  //   trafnosc: number
  //   data: number
  //   typWyroku: number
  //   typSadu: number
  //   uuid: string
  //   linkFrag: {}[]
  //   fragment: {}[]
  // }

  return (
    <div>
      <SideMenuSecondary
        mainData={
          <HighlightPopMenu>
            <SendButton onClick={submitHandler}>Testing the A's DB</SendButton>
            {/* //! problem solved with parse - html-react-parser - prarses string to html in React */}
            {data.length > 0 && parse(data[0].fragment[0])}
            {data.length > 0 &&
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
              ))}

            <DataSection variant='primary' paddingTop='large' data={Data}>
              {data.length > 0 && <div>{parse(data[0].fragment[0])}</div>}
            </DataSection>
            <DataSection variant='secondary' paddingTop='small' data={Data} />
            <DataSection paddingTop='small' data={Data} />
            <DataSection variant='tertiary' paddingTop='small' data={Data} />
            <DataSection variant='blue' paddingTop='small' data={Data} />
            <DataSection variant='transparent' paddingTop='small' data={Data} />
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
