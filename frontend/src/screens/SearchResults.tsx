import React from 'react'
import HighlightPopMenu from '../components/HighlightPopRemake/HighlightPopMenu'
import DataSection from '../components/InfoSection/DataSection'
import { useAppSelector } from '../app/reduxHooks'
import SideMenuResizable from '../components/SideMenu/SideMenuResizable'
import { UserInfo } from '../interfaces'
import UserFragmentsColumn from '../components/FragmentsColumn/UserFragmentsColumn'
import FragmentsColumn from '../components/FragmentsColumn/FragmentsColumn'
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
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  return (
    <div>
      {' '}
      <SideMenuResizable
        mainData={
          <HighlightPopMenu>
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
      </SideMenuResizable>
    </div>
  )
}
export default SearchResults
