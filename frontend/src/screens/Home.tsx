import React from 'react'
import Toast from '../components/Toast/Toast'
import HighlightPopMenu from '../components/HighlightPopRemake/HighlightPopMenu'
import FragmentsColumn from '../components/FragmentsColumn/FragmentsColumn'
import ResizableScrollSection from '../components/ScrollSection/ResizableScrollSection'
import { useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import UserFragmentsColumn from '../components/FragmentsColumn/UserFragmentsColumn'
import DataSection from '../components/InfoSection/DataSection'

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

  imgLink: 'https://source.unsplash.com/kVi5zMOUTFc',
}

const Home: React.FC = () => {
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)

  return (
    <>
      <Toast option='registerUser' />

      <ResizableScrollSection
        widthBig='60%'
        widthSmall='40%'
        transparent
        // narrowSection={<FragmentsColumn />}
        narrowSection={
          Object.keys(userInfo).length > 0 ? (
            <UserFragmentsColumn />
          ) : (
            <FragmentsColumn />
          )
        }
        wideSection={
          <HighlightPopMenu>
            <DataSection paddingTop='small' data={Data} />
          </HighlightPopMenu>
        }
      />
    </>
  )
}
export default Home
