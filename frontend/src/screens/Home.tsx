import React from 'react'
import Toast from '../components/Miscellaneous/Toast/Toast'
import { useAppSelector } from '../app/reduxHooks'
import HomeChoiceWrapper from '../components/HomePageComponents/HomeChoiceWrapper/HomeChoiceWrapper'
import HeroOne from '../components/HomePageComponents/HeroOne'
import HeroTwo from '../components/HomePageComponents/HeroTwo'
import HeroThree from '../components/HomePageComponents/HeroThree'
import { UserInfo } from '../interfaces'
import SearchResultsDisplay from '../components/HomePageComponents/SearchResultsDisplay'

const Home: React.FC = () => {
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)

  //todo tabs used for unlogged user
  const tabsTutorial = [
    {
      label: 'Wyszukiwanie',
      content: <HeroOne />,
    },
    {
      label: 'Zapisywanie',
      content: <HeroTwo />,
    },
    {
      label: 'Eksport',
      content: <HeroThree />,
    },
  ]
  const tabsUser = [
    {
      label: 'Wyszukane',
      content: <SearchResultsDisplay />,
    },
    {
      label: 'Projekty',
      content: <></>,
    },
    {
      label: 'Zapisane fragmenty',
      content: <h3>Zapisane fragmenty</h3>,
    },
    {
      label: `Ostatnie wyniki`,
      content: <h3>Ostatnie linki</h3>,
    },
  ]

  return (
    <>
      <Toast option='registerUser' />
      {Object.keys(userInfo).length === 0 && (
        <HomeChoiceWrapper tabs={tabsTutorial} />
      )}
      {/* {data && data?.length === 0 && <HomeChoiceWrapper tabs={tabsTutorial} />} */}
      {/* {data && data?.length > 0 && <HomeChoiceWrapper tabs={tabsUser} />} */}
      {Object.keys(userInfo).length > 0 && (
        <HomeChoiceWrapper navTop tabs={tabsUser} />
      )}
    </>
  )
}
export default Home
