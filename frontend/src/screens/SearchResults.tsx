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

  //! testing here - express and react
  const submitHandler = (e: any) => {
    e.preventDefault()
    // dispatch(getSearchResults('test'))
    // const query = 'podatek od towarów'
    // const query = 'podatek'
    const query = 'podatek dochodowy'
    // dispatch(getSearchResults(query.replace(/ /g, '%20')))
    const queryTrimmed = encodeURIComponent(query.trim())
    dispatch(getSearchResults(queryTrimmed))
  }

  return (
    <div>
      <SideMenuSecondary
        mainData={
          <HighlightPopMenu>
            <SendButton onClick={submitHandler}>Testing the A's DB</SendButton>
            <DataSection paddingTop='large' data={Data} />
            <DataSection paddingTop='small' data={Data} />
            <DataSection paddingTop='small' data={Data} />
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
